"use client";
import React, { useState, useCallback } from "react";
import { Trash2 } from "lucide-react";
import { useColorPaletteContext } from "@/context/ColorPaletteContext";
import ColorInSlot from "../ColorInSlot/ColorInSlot";
import ConfirmModal from "../ConfirmModal/ConfirmModal";

export default function Slot({ slot, slotIndex, isDragOver }) {
  const { state, dispatch, ACTION_TYPES, isColorSelected } =
    useColorPaletteContext();
  const { dragOverSlotIndex } = state;
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // Renombrar slot con debounce implícito
  const handleRenameSlot = useCallback(
    (e) => {
      dispatch({
        type: ACTION_TYPES.RENAME_SLOT,
        payload: { index: slotIndex, newName: e.target.value },
      });
    },
    [dispatch, ACTION_TYPES, slotIndex]
  );

  // Eliminar slot con confirmación
  const handleDeleteSlot = () => {
    dispatch({
      type: ACTION_TYPES.DELETE_SLOT,
      payload: slotIndex,
    });
  };

  // Manejar drag over
  const handleDragOver = useCallback(
    (e) => {
      e.preventDefault();
      if (dragOverSlotIndex !== slotIndex) {
        dispatch({
          type: ACTION_TYPES.SET_DRAG_OVER_SLOT_INDEX,
          payload: slotIndex,
        });
      }
    },
    [dispatch, ACTION_TYPES, slotIndex, dragOverSlotIndex]
  );

  // Manejar drag leave
  const handleDragLeave = useCallback(() => {
    dispatch({
      type: ACTION_TYPES.SET_DRAG_OVER_SLOT_INDEX,
      payload: null,
    });
  }, [dispatch, ACTION_TYPES]);

  // Manejar drop
  const handleDrop = useCallback(
    (e) => {
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
    },
    [dispatch, ACTION_TYPES, slotIndex]
  );

  // Manejar drag start de un color
  const handleColorDragStart = useCallback(
    (e, slotIndex, colorIndex, color) => {
      e.dataTransfer.setData(
        "application/json",
        JSON.stringify({
          type: "slot-color",
          slotIndex,
          colorIndex,
          color,
        })
      );
    },
    []
  );

  return (
    <>
      <div
        className={`p-3 rounded-md ${
          isDragOver
            ? "bg-gray-700 border border-dashed border-gray-400"
            : "bg-gray-800"
        } transition-colors duration-200`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-2 flex-1">
            <input
              type="text"
              value={slot.name}
              onChange={handleRenameSlot}
              className="bg-transparent border-b border-gray-600 focus:border-gray-500 focus:outline-none px-1 flex-1"
            />
            <span className="text-sm text-gray-400 whitespace-nowrap">
              ({slot.colors.length} colores)
            </span>
          </div>
          <button
            className="p-1 text-gray-400 hover:text-red-500 ml-2"
            onClick={() => setShowDeleteModal(true)}
          >
            <Trash2 size={16} />
          </button>
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

      <ConfirmModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={handleDeleteSlot}
        title="Eliminar Colección"
        message={`¿Estás seguro de que quieres eliminar la colección "${slot.name}"? Esta acción no se puede deshacer.`}
      />
    </>
  );
}
