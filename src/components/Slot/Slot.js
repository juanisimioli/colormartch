"use client";
import React from "react";
import { Trash2 } from "lucide-react";
import { useColorPaletteContext } from "@/context/ColorPaletteContext";
import ColorInSlot from "../ColorInSlot/ColorInSlot";

export default function Slot({ slot, slotIndex, isDragOver }) {
  const { state, dispatch, ACTION_TYPES, isColorSelected } =
    useColorPaletteContext();
  const { selectedSlotIndex } = state;

  // Renombrar slot
  const handleRenameSlot = (e) => {
    dispatch({
      type: ACTION_TYPES.RENAME_SLOT,
      payload: { index: slotIndex, newName: e.target.value },
    });
  };

  // Seleccionar slot para añadir colores
  const handleSelectSlot = () => {
    dispatch({
      type: ACTION_TYPES.SET_SELECTED_SLOT_INDEX,
      payload: slotIndex,
    });
  };

  // Eliminar slot
  const handleDeleteSlot = () => {
    dispatch({
      type: ACTION_TYPES.DELETE_SLOT,
      payload: slotIndex,
    });
  };

  // Manejar drag over
  const handleDragOver = (e) => {
    e.preventDefault();
    dispatch({
      type: ACTION_TYPES.SET_DRAG_OVER_SLOT_INDEX,
      payload: slotIndex,
    });
  };

  // Manejar drag enter
  const handleDragEnter = () => {
    dispatch({
      type: ACTION_TYPES.SET_DRAG_OVER_SLOT_INDEX,
      payload: slotIndex,
    });
  };

  // Manejar drag leave
  const handleDragLeave = () => {
    dispatch({
      type: ACTION_TYPES.SET_DRAG_OVER_SLOT_INDEX,
      payload: null,
    });
  };

  // Manejar drop
  const handleDrop = (e) => {
    e.preventDefault();
    dispatch({
      type: ACTION_TYPES.SET_DRAG_OVER_SLOT_INDEX,
      payload: null,
    });

    try {
      const dataString = e.dataTransfer.getData("application/json");
      if (!dataString) return;

      const data = JSON.parse(dataString);

      // Caso 1: Arrastrar desde el catálogo
      if (data.type === "catalog-color") {
        dispatch({
          type: ACTION_TYPES.ADD_COLOR_TO_SLOT,
          payload: { slotIndex, color: data.color },
        });
      }
      // Caso 2: Mover color entre slots
      else if (data.type === "slot-color") {
        const sourceSlotIndex = data.slotIndex;
        const sourceColorIndex = data.colorIndex;
        const color = data.color;

        // Solo proceder si es un slot diferente
        if (sourceSlotIndex !== slotIndex) {
          dispatch({
            type: ACTION_TYPES.MOVE_COLOR_BETWEEN_SLOTS,
            payload: {
              sourceSlotIndex,
              sourceColorIndex,
              targetSlotIndex: slotIndex,
              color,
            },
          });
        }
      }
    } catch (error) {
      console.error("Error al procesar drop en slot:", error);
    }
  };

  // Manejar drag start de un color
  const handleColorDragStart = (e, slotIndex, colorIndex, color) => {
    e.dataTransfer.setData(
      "application/json",
      JSON.stringify({
        type: "slot-color",
        slotIndex,
        colorIndex,
        color,
      })
    );
  };

  return (
    <div
      className={`p-3 rounded-md ${
        selectedSlotIndex === slotIndex
          ? "bg-gray-700 ring-2 ring-gray-500"
          : isDragOver
          ? "bg-gray-700 border border-dashed border-gray-400"
          : "bg-gray-800"
      } transition-colors duration-200`}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={slot.name}
            onChange={handleRenameSlot}
            className="bg-transparent border-b border-gray-600 focus:border-gray-500 focus:outline-none px-1"
          />
          <span className="text-sm text-gray-400">
            ({slot.colors.length} colores)
          </span>
        </div>
        <div className="flex items-center gap-1">
          <button
            className={`px-2 py-1 rounded-md ${
              selectedSlotIndex === slotIndex
                ? "bg-gray-700"
                : "bg-gray-600 hover:bg-gray-700"
            }`}
            onClick={handleSelectSlot}
          >
            Seleccionar
          </button>
          <button
            className="p-1 text-gray-400 hover:text-red-500"
            onClick={handleDeleteSlot}
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>

      {/* Colores en el slot */}
      <div className="flex flex-wrap gap-2">
        {slot.colors.map((color, colorIndex) => (
          <ColorInSlot
            key={`slot-${slotIndex}-color-${colorIndex}`}
            slotIndex={slotIndex}
            colorIndex={colorIndex}
            color={color}
            isSelected={isColorSelected(slotIndex, color)}
            onDragStart={handleColorDragStart}
          />
        ))}
      </div>
    </div>
  );
}
