"use client";
import React, { useState, useCallback, useEffect } from "react";
import { Trash2, ChevronDown, ChevronUp } from "lucide-react";
import { useColorPaletteContext } from "@/context/ColorPaletteContext";
import ColorInSlot from "../ColorInSlot/ColorInSlot";
import ConfirmModal from "../ConfirmModal/ConfirmModal";

export default function Slot({ slot, slotIndex, isDragOver }) {
  const { state, dispatch, ACTION_TYPES, isColorSelected } =
    useColorPaletteContext();
  const { dragOverSlotIndex } = state;
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Estado local para el nombre del slot
  const [localName, setLocalName] = useState(slot.name);
  const [isEditing, setIsEditing] = useState(false);

  // Sincronizar el estado local cuando cambia el prop
  useEffect(() => {
    setLocalName(slot.name);
  }, [slot.name]);

  // Manejar cambio en el input (solo estado local)
  const handleNameChange = useCallback((e) => {
    setLocalName(e.target.value);
  }, []);

  // Iniciar edición
  const handleStartEdit = useCallback(() => {
    setIsEditing(true);
    setLocalName(slot.name);
  }, [slot.name]);

  // Confirmar cambios (commit al store)
  const handleCommitChanges = useCallback(() => {
    if (localName.trim() && localName !== slot.name) {
      dispatch({
        type: ACTION_TYPES.RENAME_SLOT,
        payload: { index: slotIndex, newName: localName.trim() },
      });
    } else {
      // Si no hay cambios válidos, revertir
      setLocalName(slot.name);
    }
    setIsEditing(false);
  }, [dispatch, ACTION_TYPES, slotIndex, localName, slot.name]);

  // Cancelar edición
  const handleCancelEdit = useCallback(() => {
    setLocalName(slot.name);
    setIsEditing(false);
  }, [slot.name]);

  // Manejar teclas especiales
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        handleCommitChanges();
      } else if (e.key === "Escape") {
        e.preventDefault();
        handleCancelEdit();
      }
    },
    [handleCommitChanges, handleCancelEdit]
  );

  // Eliminar slot con confirmación
  const handleDeleteSlot = () => {
    dispatch({
      type: ACTION_TYPES.DELETE_SLOT,
      payload: slotIndex,
    });
  };

  // Manejar drag over - SOLO en el área del slot
  const handleDragOver = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation(); // Evitar que se propague al área de drop padre

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
  const handleDragLeave = useCallback(
    (e) => {
      // Solo resetear si realmente salimos del slot
      if (!e.currentTarget.contains(e.relatedTarget)) {
        dispatch({
          type: ACTION_TYPES.SET_DRAG_OVER_SLOT_INDEX,
          payload: null,
        });
      }
    },
    [dispatch, ACTION_TYPES]
  );

  // Manejar drop - SOLO en el área del slot
  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation(); // IMPORTANTE: evitar que se propague al área padre

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
        className={`rounded-md ${
          isDragOver
            ? "bg-gray-700 border border-dashed border-gray-400"
            : "bg-gray-800"
        } transition-colors duration-200 overflow-hidden`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {/* Header del slot - colapsable */}
        <div
          className="p-3 cursor-pointer hover:bg-gray-750"
          onClick={() => !isEditing && setIsCollapsed(!isCollapsed)}
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 flex-1">
              <input
                type="text"
                value={localName}
                onChange={handleNameChange}
                onBlur={handleCommitChanges}
                onFocus={handleStartEdit}
                onKeyDown={handleKeyDown}
                className={`bg-transparent border-b px-1 flex-1 transition-colors ${
                  isEditing
                    ? "border-blue-500 text-white"
                    : "border-gray-600 hover:border-gray-500"
                } focus:border-blue-500 focus:outline-none`}
                onClick={(e) => e.stopPropagation()} // Evitar que se colapse al editar
                placeholder="Nombre del slot"
              />
              <span className="text-sm text-gray-400 whitespace-nowrap">
                ({slot.colors.length} colores)
              </span>
              <div className="flex items-center gap-1 ml-2">
                {isCollapsed ? (
                  <ChevronDown size={16} />
                ) : (
                  <ChevronUp size={16} />
                )}
              </div>
            </div>
            <button
              className="p-1 text-gray-400 hover:text-red-500 ml-2 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setShowDeleteModal(true);
              }}
            >
              <Trash2 size={16} />
            </button>
          </div>
        </div>

        {/* Colores en el slot - colapsable */}
        {!isCollapsed && (
          <div className="px-3 pb-3">
            <div className="flex flex-wrap gap-2">
              {slot.colors.map((color, colorIndex) => (
                <ColorInSlot
                  key={`slot-${slotIndex}-color-${colorIndex}-${color.code}`}
                  slotIndex={slotIndex}
                  colorIndex={colorIndex}
                  color={color}
                  isSelected={isColorSelected(slotIndex, color)}
                  onDragStart={handleColorDragStart}
                />
              ))}
            </div>
          </div>
        )}
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
