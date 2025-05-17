"use client";
import React, { memo, useCallback, useState } from "react";
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
  const [isDragOver, setIsDragOver] = useState(false);
  const [dragPosition, setDragPosition] = useState("center");

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

  // Manejar drag over con detección de posición
  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();

    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const elementWidth = rect.width;

    // Determinar si está en la mitad izquierda o derecha
    if (mouseX < elementWidth / 2) {
      setDragPosition("left");
    } else {
      setDragPosition("right");
    }

    setIsDragOver(true);
    e.dataTransfer.dropEffect = "move";
  }, []);

  const handleDragEnter = useCallback((e) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    // Solo remover el estado si realmente salimos del elemento
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setIsDragOver(false);
      setDragPosition("center");
    }
  }, []);

  // Manejar drop con lógica mejorada
  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();

      setIsDragOver(false);
      setDragPosition("center");

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
            if (sourceColorIndex !== colorIndex) {
              // Calcular la posición final basada en dónde se soltó
              let finalTargetIndex = colorIndex;

              if (dragPosition === "left") {
                // Insertar antes del elemento actual
                finalTargetIndex = colorIndex;
              } else {
                // Insertar después del elemento actual
                finalTargetIndex = colorIndex + 1;
              }

              // Ajustar si el elemento viene de antes
              if (sourceColorIndex < finalTargetIndex) {
                finalTargetIndex = finalTargetIndex - 1;
              }

              dispatch({
                type: ACTION_TYPES.REORDER_COLORS_IN_SLOT,
                payload: {
                  slotIndex,
                  sourceColorIndex,
                  targetColorIndex: finalTargetIndex,
                },
              });
            }
          }
          // Caso 2: Mover entre slots diferentes
          else {
            let finalTargetIndex = colorIndex;
            if (dragPosition === "right") {
              finalTargetIndex = colorIndex + 1;
            }

            dispatch({
              type: ACTION_TYPES.MOVE_COLOR_BETWEEN_SLOTS,
              payload: {
                sourceSlotIndex,
                sourceColorIndex,
                targetSlotIndex: slotIndex,
                targetColorIndex: finalTargetIndex,
                color: sourceColor,
              },
            });
          }
        }
      } catch (error) {
        console.error("Error al procesar drop en color:", error);
      }
    },
    [dispatch, ACTION_TYPES, slotIndex, colorIndex, dragPosition]
  );

  return (
    <div
      className={`w-[100px] relative rounded-md overflow-hidden cursor-pointer border transition-all duration-150 ${
        isDragOver
          ? `border-blue-400 ${
              dragPosition === "left"
                ? "border-l-4"
                : dragPosition === "right"
                ? "border-r-4"
                : "border-2"
            }`
          : "border-gray-700"
      } mb-2`}
      onClick={handleColorClick}
      draggable
      onDragStart={(e) => onDragStart(e, slotIndex, colorIndex, color)}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
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

      {/* Indicador visual de posición durante drag */}
      {isDragOver && (
        <div
          className={`absolute top-0 w-1 h-full bg-blue-400 ${
            dragPosition === "left" ? "left-0" : "right-0"
          }`}
        ></div>
      )}
    </div>
  );
});

export default ColorInSlot;
