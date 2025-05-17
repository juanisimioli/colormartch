"use client";
import React from "react";
import { X } from "lucide-react";
import { useColorPaletteContext } from "@/context/ColorPaletteContext";

export default function ColorInSlot({
  slotIndex,
  colorIndex,
  color,
  isSelected,
  onDragStart,
}) {
  const { dispatch, ACTION_TYPES } = useColorPaletteContext();

  // Seleccionar color para la combinación
  const handleColorClick = () => {
    dispatch({
      type: ACTION_TYPES.SELECT_COLOR_FOR_COMBINATION,
      payload: { slotIndex, color },
    });
  };

  // Eliminar color del slot
  const handleRemoveColor = (e) => {
    e.stopPropagation();
    dispatch({
      type: ACTION_TYPES.REMOVE_COLOR_FROM_SLOT,
      payload: { slotIndex, colorCode: color.code },
    });
  };

  // Manejar drop para reordenamiento
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation(); // Importante: evitar que se propague al slot

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
          dispatch({
            type: ACTION_TYPES.REORDER_COLORS_IN_SLOT,
            payload: {
              slotIndex,
              sourceColorIndex,
              targetColorIndex: colorIndex,
            },
          });
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
  };

  return (
    <div
      className="w-[100px] relative rounded-md overflow-hidden cursor-pointer border border-gray-700 mb-2"
      onClick={handleColorClick}
      draggable
      onDragStart={(e) => onDragStart(e, slotIndex, colorIndex, color)}
      onDragOver={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
      onDrop={handleDrop}
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
        className="absolute top-1 right-1 p-1 bg-gray-800 bg-opacity-60 rounded-full"
        onClick={handleRemoveColor}
      >
        <X size={12} />
      </button>
      {isSelected && (
        <div className="absolute inset-0 border-2 border-yellow-400 pointer-events-none"></div>
      )}
    </div>
  );
}
