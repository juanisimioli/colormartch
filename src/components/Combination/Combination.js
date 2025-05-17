"use client";
import React from "react";
import { X } from "lucide-react";
import { useColorPaletteContext } from "@/context/ColorPaletteContext";
import { exportCombination } from "@/utils/exportUtils";

export default function Combination() {
  const { state, dispatch, ACTION_TYPES } = useColorPaletteContext();
  const { combinations, activeCombinationIndex } = state;

  // Obtener la combinación activa
  const currentCombination = combinations[activeCombinationIndex];
  const selectedColors = currentCombination?.selectedColors || [];

  // Eliminar color de la combinación
  const removeColorFromCombination = (index) => {
    dispatch({
      type: ACTION_TYPES.REMOVE_COLOR_FROM_COMBINATION,
      payload: index,
    });
  };

  // Iniciar el arrastre para reordenar
  const handleCombinationDragStart = (index) => {
    const element = document.getElementById(`combination-item-${index}`);
    if (element) {
      element.setAttribute("data-dragging", "true");
    }
  };

  // Manejar el drop para reordenar
  const handleCombinationDrop = (e, targetIndex) => {
    e.preventDefault();

    // Encontrar el elemento que se está arrastrando
    const draggingElement = document.querySelector('[data-dragging="true"]');
    if (draggingElement) {
      const sourceIndex = parseInt(
        draggingElement.getAttribute("data-index"),
        10
      );
      draggingElement.removeAttribute("data-dragging");

      // Ignorar si se suelta en la misma posición
      if (sourceIndex === targetIndex) return;

      dispatch({
        type: ACTION_TYPES.REORDER_COMBINATION_COLORS,
        payload: { sourceIndex, targetIndex },
      });
    }
  };

  // Exportar combinación actual
  const handleExport = () => {
    exportCombination(currentCombination);
  };

  return (
    <div className="mb-4 bg-gray-800 p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-3">
        {currentCombination?.name || "Mi Combinación"}
      </h2>
      <div className="flex gap-1 rounded-md overflow-hidden shadow-lg">
        {selectedColors.map((item, index) => (
          <div
            id={`combination-item-${index}`}
            data-index={index}
            key={`combination-${index}`}
            className="flex-1 relative cursor-move"
            style={{
              backgroundColor: item.color.hex || "#e0e0e0",
              height: "140px",
              opacity: document
                .getElementById(`combination-item-${index}`)
                ?.hasAttribute("data-dragging")
                ? 0.5
                : 1,
            }}
            draggable
            onDragStart={() => handleCombinationDragStart(index)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleCombinationDrop(e, index)}
          >
            <button
              className="absolute top-2 right-2 p-1 bg-gray-800 bg-opacity-50 hover:bg-opacity-80 rounded-full"
              onClick={() => removeColorFromCombination(index)}
            >
              <X size={14} />
            </button>
          </div>
        ))}
      </div>
      <div className="flex gap-1 mt-2">
        {selectedColors.map((item, index) => (
          <div
            key={`combination-info-${index}`}
            className="flex-1 p-2 bg-gray-800 rounded-md text-center border border-gray-700"
          >
            <div className="font-medium">{item.color.name}</div>
            <div className="text-sm text-gray-400">{item.color.code}</div>
            <div className="text-xs mt-1">{item.color.hex}</div>
            <div className="text-xs mt-1 text-gray-400">{item.color.rgb}</div>
            {/* Mostrar page y section si están disponibles */}
            {item.color.page && item.color.section && (
              <div className="text-xs mt-1 text-gray-500">
                {item.color.page} / {item.color.section}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Botón para exportar la combinación */}
      <div className="mt-4 flex justify-end">
        <button
          className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-md flex items-center gap-2"
          onClick={handleExport}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Exportar Combinación
        </button>
      </div>
    </div>
  );
}
