"use client";
import React from "react";
import { Plus, ChevronDown, ChevronRight } from "lucide-react";
import { useColorPaletteContext } from "@/context/ColorPaletteContext";
import Slot from "../Slot/Slot";

export default function SlotsList() {
  const { state, dispatch, ACTION_TYPES } = useColorPaletteContext();
  const { slots, slotsExpanded, dragOverSlotIndex } = state;

  // Toggle expansión de slots
  const toggleSlotsExpanded = () => {
    dispatch({
      type: ACTION_TYPES.SET_SLOTS_EXPANDED,
      payload: !slotsExpanded,
    });
  };

  // Crear nuevo slot
  const createSlot = () => {
    dispatch({ type: ACTION_TYPES.CREATE_SLOT });
  };

  return (
    <div className="flex-1 overflow-y-auto custom-scrollbar pr-4">
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
            <div className="text-center p-10 text-gray-400">
              <p>No hay slots creados. Crea tu primer slot para comenzar.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
