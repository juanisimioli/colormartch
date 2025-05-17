"use client";
import React, { useState } from "react";
import { X, ChevronDown, ChevronUp } from "lucide-react";
import { useColorPaletteContext } from "@/context/ColorPaletteContext";

export default function Combination() {
  const { state, dispatch, ACTION_TYPES } = useColorPaletteContext();
  const { combinations, activeCombinationIndex } = state;
  const [isCollapsed, setIsCollapsed] = useState(false);

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

    const draggingElement = document.querySelector('[data-dragging="true"]');
    if (draggingElement) {
      const sourceIndex = parseInt(
        draggingElement.getAttribute("data-index"),
        10
      );
      draggingElement.removeAttribute("data-dragging");

      if (sourceIndex === targetIndex) return;

      dispatch({
        type: ACTION_TYPES.REORDER_COMBINATION_COLORS,
        payload: { sourceIndex, targetIndex },
      });
    }
  };

  return (
    <div className="mb-4 bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div
        className="p-4 cursor-pointer hover:bg-gray-750"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">
            {currentCombination?.name || "Mi Combinación"}
          </h2>
          <div className="flex items-center gap-3">
            <span className="text-gray-400 text-sm">
              {selectedColors.length} colores
            </span>
            {isCollapsed ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
          </div>
        </div>
      </div>

      {!isCollapsed && (
        <div className="px-4 pb-4">
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
                {/* Mostrar page y section si están disponibles */}
                {item.color.page && item.color.section && (
                  <div className="text-xs mt-1 text-gray-500">
                    {item.color.page} / {item.color.section}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
