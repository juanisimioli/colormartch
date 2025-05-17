"use client";
import React, { useCallback } from "react";
import { Plus, ChevronDown, ChevronRight } from "lucide-react";
import { useColorPaletteContext } from "@/context/ColorPaletteContext";
import Slot from "../Slot/Slot";

export default function SlotsList() {
  const { state, dispatch, ACTION_TYPES } = useColorPaletteContext();
  const {
    combinations,
    activeCombinationIndex,
    slotsExpanded,
    dragOverSlotIndex,
  } = state;

  // Obtener la combinación activa
  const currentCombination = combinations[activeCombinationIndex];
  const slots = currentCombination?.slots || [];

  // Toggle expansión de slots
  const toggleSlotsExpanded = useCallback(() => {
    dispatch({
      type: ACTION_TYPES.SET_SLOTS_EXPANDED,
      payload: !slotsExpanded,
    });
  }, [dispatch, ACTION_TYPES, slotsExpanded]);

  // Crear nuevo slot
  const createSlot = useCallback(() => {
    dispatch({ type: ACTION_TYPES.CREATE_SLOT });
  }, [dispatch, ACTION_TYPES]);

  // Manejar drop en área vacía para auto-crear slot
  const handleEmptyAreaDrop = useCallback(
    (e) => {
      e.preventDefault();

      try {
        const dataString = e.dataTransfer.getData("application/json");
        if (!dataString) return;

        const data = JSON.parse(dataString);

        // Solo crear slot si es un color del catálogo
        if (data.type === "catalog-color") {
          // Crear nuevo slot
          dispatch({ type: ACTION_TYPES.CREATE_SLOT });

          // Agregar el color al nuevo slot (será el último)
          setTimeout(() => {
            dispatch({
              type: ACTION_TYPES.ADD_COLOR_TO_SLOT,
              payload: { slotIndex: slots.length, color: data.color },
            });
          }, 0);
        }
      } catch (error) {
        console.error("Error al procesar drop en área vacía:", error);
      }
    },
    [dispatch, ACTION_TYPES, slots.length]
  );

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
  }, []);

  return (
    <div
      className="flex-1 overflow-y-auto custom-scrollbar pr-4"
      onDragOver={handleDragOver}
      onDrop={handleEmptyAreaDrop}
    >
      <div className="mb-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-bold">Mis Colecciones</h2>
          <button
            className="p-1 text-gray-300 hover:text-white rounded"
            onClick={toggleSlotsExpanded}
          >
            {slotsExpanded ? (
              <ChevronDown size={20} />
            ) : (
              <ChevronRight size={20} />
            )}
          </button>
        </div>
        <button
          className="flex items-center gap-1 px-3 py-1 bg-gray-600 hover:bg-gray-700 rounded-md"
          onClick={createSlot}
        >
          <Plus size={16} />
          <span>Nuevo Slot</span>
        </button>
      </div>

      {/* Lista de Slots */}
      {slotsExpanded && (
        <div className="space-y-4">
          {slots.map((slot, slotIndex) => (
            <Slot
              key={`slot-${slotIndex}`}
              slot={slot}
              slotIndex={slotIndex}
              isDragOver={dragOverSlotIndex === slotIndex}
            />
          ))}

          {slots.length === 0 && (
            <div
              className="text-center p-10 text-gray-400 border-2 border-dashed border-gray-600 rounded-lg"
              onDragOver={handleDragOver}
              onDrop={handleEmptyAreaDrop}
            >
              <p className="mb-2">No hay slots creados.</p>
              <p className="text-sm">
                Arrastra un color aquí para crear tu primer slot
                automáticamente.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
