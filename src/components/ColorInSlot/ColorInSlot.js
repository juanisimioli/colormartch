"use client";
import React, { memo, useCallback } from "react";
import { X } from "lucide-react";
import { useColorPaletteContext } from "@/context/ColorPaletteContext";

const ColorInSlot = memo(function ColorInSlot({
  slotIndex,
  colorIndex,
  color,
  isSelected,
  onDragStart,
}) {
  const { dispatch, ACTION_TYPES } = useColorPaletteContext();

  // Seleccionar color para la combinación
  const handleColorClick = useCallback(() => {
    dispatch({
      type: ACTION_TYPES.SELECT_COLOR_FOR_COMBINATION,
      payload: { slotIndex, color },
    });
  }, [dispatch, ACTION_TYPES, slotIndex, color]);

  // Eliminar color del slot
  const handleRemoveColor = useCallback(
    (e) => {
      e.stopPropagation();
      dispatch({
        type: ACTION_TYPES.REMOVE_COLOR_FROM_SLOT,
        payload: { slotIndex, colorCode: color.code },
      });
    },
    [dispatch, ACTION_TYPES, slotIndex, color.code]
  );

  // Manejar drop para reordenamiento
  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();

      try {
        const dataString = e.dataTransfer.getData("application/json");
        if (!dataString) return;

        const data = JSON.parse(dataString);

        // Solo proceder si es un color de un slot
        if (data.type === "slot-color") {
          const sourceSlotIndex = data.slotIndex;
          const sourceColorIndex = data.colorIndex;
          const sourceColor = data.color;

          // Caso 1: Reordenar dentro del mismo slot
          if (sourceSlotIndex === slotIndex) {
            // Solo si no es la misma posición
            if (sourceColorIndex !== colorIndex) {
              dispatch({
                type: ACTION_TYPES.REORDER_COLORS_IN_SLOT,
                payload: {
                  slotIndex,
                  sourceColorIndex,
                  targetColorIndex: colorIndex,
                },
              });
            }
          }
          // Caso 2: Mover entre slots diferentes
          else {
            dispatch({
              type: ACTION_TYPES.MOVE_COLOR_BETWEEN_SLOTS,
              payload: {
                sourceSlotIndex,
                sourceColorIndex,
                targetSlotIndex: slotIndex,
                targetColorIndex: colorIndex,
                color: sourceColor,
              },
            });
          }
        }
      } catch (error) {
        console.error("Error al procesar drop en color:", error);
      }
    },
    [dispatch, ACTION_TYPES, slotIndex, colorIndex]
  );

  // Mejorar la zona de drop
  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();

    // Agregar efecto visual para mejor UX
    e.dataTransfer.dropEffect = "move";
  }, []);

  return (
    <div
      className="w-[100px] relative rounded-md overflow-hidden cursor-pointer border border-gray-700 mb-2 transition-all duration-150"
      onClick={handleColorClick}
      draggable
      onDragStart={(e) => onDragStart(e, slotIndex, colorIndex, color)}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      style={{
        transform: isSelected ? "scale(0.98)" : "scale(1)",
      }}
    >
      <div
        className="w-full"
        style={{
          backgroundColor: color.hex || "#e0e0e0",
          height: "70px",
        }}
      ></div>
      <div className="p-2 text-xs bg-gray-800">
        <div className="font-medium truncate">{color.name}</div>
        <div className="text-gray-300 text-xs">{color.code}</div>
        {/* Mostrar page y section si están disponibles */}
        {color.page && color.section && (
          <div className="text-gray-400 text-xs mt-1">
            {color.page} / {color.section}
          </div>
        )}
      </div>
      <button
        className="absolute top-1 right-1 p-1 bg-gray-800 bg-opacity-60 rounded-full hover:bg-opacity-90 transition-all"
        onClick={handleRemoveColor}
      >
        <X size={12} />
      </button>
      {isSelected && (
        <div className="absolute inset-0 border-2 border-yellow-400 pointer-events-none rounded-md"></div>
      )}
    </div>
  );
});

export default ColorInSlot;
