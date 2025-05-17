"use client";
import React from "react";
import { Plus, Trash2, Download, Upload, ChevronDown } from "lucide-react";
import { useColorPaletteContext } from "@/context/ColorPaletteContext";
import {
  exportCombination,
  exportAllCombinations,
  importCombination,
} from "@/utils/exportUtils";

export default function CombinationManager() {
  const { state, dispatch, ACTION_TYPES } = useColorPaletteContext();
  const { combinations, activeCombinationIndex } = state;

  // Crear nueva combinación
  const handleCreateCombination = () => {
    dispatch({ type: ACTION_TYPES.CREATE_COMBINATION });
  };

  // Cambiar combinación activa
  const handleSetActiveCombination = (index) => {
    dispatch({
      type: ACTION_TYPES.SET_ACTIVE_COMBINATION,
      payload: index,
    });
  };

  // Renombrar combinación
  const handleRenameCombination = (index, newName) => {
    dispatch({
      type: ACTION_TYPES.RENAME_COMBINATION,
      payload: { index, newName },
    });
  };

  // Eliminar combinación
  const handleDeleteCombination = (index) => {
    if (combinations.length > 1) {
      dispatch({
        type: ACTION_TYPES.DELETE_COMBINATION,
        payload: index,
      });
    }
  };

  // Exportar combinación actual
  const handleExportCombination = () => {
    const currentCombination = combinations[activeCombinationIndex];
    exportCombination(currentCombination);
  };

  // Exportar todas las combinaciones
  const handleExportAllCombinations = () => {
    exportAllCombinations(combinations);
  };

  // Importar combinaciones
  const handleImportCombination = () => {
    importCombination(
      (importedCombinations) => {
        // Agregar las combinaciones importadas
        importedCombinations.forEach((combination) => {
          dispatch({
            type: ACTION_TYPES.SET_COMBINATIONS,
            payload: [...combinations, combination],
          });
        });

        // Cambiar a la primera combinación importada
        dispatch({
          type: ACTION_TYPES.SET_ACTIVE_COMBINATION,
          payload: combinations.length,
        });
      },
      (error) => {
        alert(`Error al importar: ${error}`);
      }
    );
  };

  return (
    <div className="mb-4 bg-gray-800 p-4 rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-bold">Gestión de Combinaciones</h2>
        <div className="flex gap-2">
          <button
            className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded-md flex items-center gap-1"
            onClick={handleCreateCombination}
          >
            <Plus size={16} />
            Nueva
          </button>
          <button
            className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded-md flex items-center gap-1"
            onClick={handleImportCombination}
          >
            <Upload size={16} />
            Importar
          </button>
          <div className="relative">
            <select
              className="appearance-none bg-gray-600 hover:bg-gray-700 px-3 py-1 rounded-md pr-8 cursor-pointer"
              onChange={(e) => {
                const action = e.target.value;
                if (action === "current") {
                  handleExportCombination();
                } else if (action === "all") {
                  handleExportAllCombinations();
                }
                e.target.value = ""; // Reset
              }}
              defaultValue=""
            >
              <option value="" disabled>
                Exportar
              </option>
              <option value="current">Combinación Actual</option>
              <option value="all">Todas las Combinaciones</option>
            </select>
            <ChevronDown
              className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none"
              size={16}
            />
          </div>
        </div>
      </div>

      {/* Lista de combinaciones */}
      <div className="space-y-2">
        {combinations.map((combination, index) => (
          <div
            key={combination.id}
            className={`p-3 rounded-md border-2 transition-colors ${
              index === activeCombinationIndex
                ? "border-blue-500 bg-gray-700"
                : "border-gray-600 bg-gray-750 hover:bg-gray-700"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 flex-1">
                <button
                  className={`w-4 h-4 rounded-full border-2 ${
                    index === activeCombinationIndex
                      ? "border-blue-500 bg-blue-500"
                      : "border-gray-400"
                  }`}
                  onClick={() => handleSetActiveCombination(index)}
                />
                <input
                  type="text"
                  value={combination.name}
                  onChange={(e) =>
                    handleRenameCombination(index, e.target.value)
                  }
                  className="bg-transparent border-none outline-none text-white flex-1"
                  onClick={(e) => e.stopPropagation()}
                />
                <div className="text-sm text-gray-400">
                  {combination.slots.length} slots •{" "}
                  {combination.selectedColors.length} colores
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="p-1 bg-gray-600 hover:bg-gray-500 rounded"
                  onClick={() => exportCombination(combination)}
                  title="Exportar esta combinación"
                >
                  <Download size={16} />
                </button>
                {combinations.length > 1 && (
                  <button
                    className="p-1 text-red-400 hover:text-red-300 hover:bg-red-900/20 rounded"
                    onClick={() => handleDeleteCombination(index)}
                    title="Eliminar combinación"
                  >
                    <Trash2 size={16} />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
