"use client";
import React, { useCallback, useState } from "react";
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

  // Estados locales
  const [isCreatingSlot, setIsCreatingSlot] = useState(false);
  const [pendingColor, setPendingColor] = useState(null);
  const [isDragOverCreateArea, setIsDragOverCreateArea] = useState(false);
  const [isAnyDragActive, setIsAnyDragActive] = useState(false);

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

  // Detectar cuando inicia cualquier operación de drag
  const handleGlobalDragEnter = useCallback((e) => {
    setIsAnyDragActive(true);
  }, []);

  const handleGlobalDragLeave = useCallback((e) => {
    // Solo desactivar si realmente salimos del área completa
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setIsAnyDragActive(false);
    }
  }, []);

  // Manejar drop en área de creación específica
  const handleCreateAreaDragOver = useCallback((e) => {
    e.preventDefault();
    setIsDragOverCreateArea(true);
  }, []);

  const handleCreateAreaDragEnter = useCallback((e) => {
    e.preventDefault();
    setIsDragOverCreateArea(true);
  }, []);

  const handleCreateAreaDragLeave = useCallback((e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setIsDragOverCreateArea(false);
    }
  }, []);

  // Manejar drop en área de creación para auto-crear slot
  const handleCreateAreaDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    
    setIsDragOverCreateArea(false);
    setIsAnyDragActive(false);

    try {
      const dataString = e.dataTransfer.getData("application/json");
      if (!dataString) return;

      const data = JSON.parse(dataString);

      // Solo crear slot si es un color del catálogo
      if (data.type === "catalog-color") {
        setIsCreatingSlot(true);
        setPendingColor(data.color);

        // Crear nuevo slot
        dispatch({ type: ACTION_TYPES.CREATE_SLOT });

        // Esperar un momento para que el slot se cree y luego agregar el color
        setTimeout(() => {
          dispatch({
            type: ACTION_TYPES.ADD_COLOR_TO_SLOT,
            payload: { slotIndex: slots.length, color: data.color },
          });
          setIsCreatingSlot(false);
          setPendingColor(null);
        }, 100);
      }
    } catch (error) {
      console.error("Error al procesar drop en área de creación:", error);
      setIsCreatingSlot(false);
      setPendingColor(null);
    }
  }, [dispatch, ACTION_TYPES, slots.length]);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
  }, []);

  // Determinar si mostrar el área de creación
  const shouldShowCreateArea = slots.length === 0 || (isAnyDragActive && slots.length > 0);

  return (
    <div 
      className="flex-1 overflow-y-auto custom-scrollbar pr-4"
      onDragEnter={handleGlobalDragEnter}
      onDragLeave={handleGlobalDragLeave}
      onDragOver={handleDragOver}
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
              key={`slot-${slotIndex}-${slot.name}`}
              slot={slot}
              slotIndex={slotIndex}
              isDragOver={dragOverSlotIndex === slotIndex}
            />
          ))}

          {/* Skeleton mientras se crea un nuevo slot */}
          {isCreatingSlot && (
            <div className="p-3 rounded-md bg-gray-800 border border-dashed border-gray-500 animate-pulse">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2 flex-1">
                  <div className="h-4 bg-gray-700 rounded w-24"></div>
                  <span className="text-sm text-gray-400">(Creando slot...)</span>
                </div>
              </div>
              {pendingColor && (
                <div className="flex flex-wrap gap-2">
                  <div className="w-[100px] relative rounded-md overflow-hidden border border-gray-600 mb-2 opacity-50">
                    <div
                      className="w-full h-[70px]"
                      style={{ backgroundColor: pendingColor.hex || "#e0e0e0" }}
                    ></div>
                    <div className="p-2 text-xs bg-gray-800">
                      <div className="font-medium truncate">{pendingColor.name}</div>
                      <div className="text-gray-300 text-xs">{pendingColor.code}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Área de creación - Solo visible cuando no hay slots O durante drag */}
          {shouldShowCreateArea && (
            <div 
              className={`text-center p-8 rounded-lg border-2 border-dashed transition-all duration-200 ${
                isDragOverCreateArea
                  ? 'border-blue-400 bg-blue-50/10 shadow-lg shadow-blue-500/20'
                  : isAnyDragActive
                  ? 'border-gray-500 bg-gray-700/50'
                  : 'border-gray-600 bg-transparent hover:border-gray-500'
              }`}
              onDragOver={handleCreateAreaDragOver}
              onDragEnter={handleCreateAreaDragEnter}
              onDragLeave={handleCreateAreaDragLeave}
              onDrop={handleCreateAreaDrop}
            >
              <div className={`transition-colors duration-200 ${
                isDragOverCreateArea 
                  ? 'text-blue-300' 
                  : isAnyDragActive 
                  ? 'text-gray-300' 
                  : 'text-gray-400'
              }`}>
                {slots.length === 0 ? (
                  <>
                    <p className="mb-2 font-medium">No hay slots creados.</p>
                    <p className="text-sm">
                      Arrastra un color aquí para crear tu primer slot automáticamente.
                    </p>
                  </>
                ) : (
                  <p className="text-sm font-medium">
                    Arrastra un color aquí para crear un nuevo slot
                  </p>
                )}
              </div>
              
              {/* Indicador visual adicional durante drag */}
              {isDragOverCreateArea && (
                <div className="mt-4 flex justify-center">
                  <div className="w-12 h-12 border-2 border-blue-400 border-dashed rounded-full flex items-center justify-center animate-pulse">
                    <Plus size={24} className="text-blue-400" />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}