"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Plus, Upload, Download } from "lucide-react";
import { useColorPaletteContext } from "@/context/ColorPaletteContext";
import {
  exportCombination,
  exportAllCombinations,
  importCombination,
} from "@/utils/exportUtils";

export default function Header() {
  const { state, dispatch, ACTION_TYPES } = useColorPaletteContext();
  const { combinations, activeCombinationIndex } = state;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const currentCombination = combinations[activeCombinationIndex];

  // Crear nueva combinación
  const handleCreateCombination = () => {
    dispatch({ type: ACTION_TYPES.CREATE_COMBINATION });
    setIsDropdownOpen(false);
  };

  // Importar combinaciones
  const handleImportCombination = () => {
    importCombination(
      (importedCombinations) => {
        importedCombinations.forEach((combination) => {
          dispatch({
            type: ACTION_TYPES.SET_COMBINATIONS,
            payload: [...combinations, combination],
          });
        });
        dispatch({
          type: ACTION_TYPES.SET_ACTIVE_COMBINATION,
          payload: combinations.length,
        });
      },
      (error) => {
        alert(`Error al importar: ${error}`);
      }
    );
    setIsDropdownOpen(false);
  };

  // Exportar todas las combinaciones
  const handleExportAll = () => {
    exportAllCombinations(combinations);
    setIsDropdownOpen(false);
  };

  // Exportar combinación actual
  const handleExportCurrent = () => {
    exportCombination(currentCombination);
    setIsDropdownOpen(false);
  };

  return (
    <header className="p-2 px-6 bg-gray-800 border-b border-gray-700 flex items-center">
      <div className="flex-1 text-center">
        <h1 className="text-xl font-bold text-white">Color Match</h1>
      </div>

      {/* Dropdown de gestión de combinaciones */}
      <div className="relative mr-4">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center gap-2 px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded-md text-white"
        >
          <span className="text-sm">{currentCombination?.name}</span>
          <ChevronDown size={16} />
        </button>

        {isDropdownOpen && (
          <>
            {/* Overlay para cerrar dropdown */}
            <div
              className="fixed inset-0 z-10"
              onClick={() => setIsDropdownOpen(false)}
            />

            {/* Dropdown content */}
            <div className="absolute right-0 mt-1 w-72 bg-gray-700 rounded-md shadow-lg z-20 border border-gray-600">
              <div className="p-3 border-b border-gray-600">
                <div className="flex gap-2">
                  <button
                    onClick={handleCreateCombination}
                    className="flex-1 flex items-center justify-center gap-1 px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded-md text-sm"
                  >
                    <Plus size={14} />
                    Nueva
                  </button>
                  <button
                    onClick={handleImportCombination}
                    className="flex-1 flex items-center justify-center gap-1 px-3 py-1 bg-green-600 hover:bg-green-700 rounded-md text-sm"
                  >
                    <Upload size={14} />
                    Importar
                  </button>
                </div>
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={handleExportCurrent}
                    className="flex-1 flex items-center justify-center gap-1 px-3 py-1 bg-gray-600 hover:bg-gray-500 rounded-md text-sm"
                  >
                    <Download size={14} />
                    Exportar Actual
                  </button>
                  <button
                    onClick={handleExportAll}
                    className="flex-1 flex items-center justify-center gap-1 px-3 py-1 bg-gray-600 hover:bg-gray-500 rounded-md text-sm"
                  >
                    <Download size={14} />
                    Exportar Todas
                  </button>
                </div>
              </div>

              <div className="max-h-64 overflow-y-auto">
                {combinations.map((combination, index) => (
                  <div
                    key={combination.id}
                    className={`p-3 border-b border-gray-600 last:border-b-0 cursor-pointer hover:bg-gray-600 ${
                      index === activeCombinationIndex ? "bg-gray-600" : ""
                    }`}
                    onClick={() => {
                      dispatch({
                        type: ACTION_TYPES.SET_ACTIVE_COMBINATION,
                        payload: index,
                      });
                      setIsDropdownOpen(false);
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-white text-sm font-medium">
                        {combination.name}
                      </span>
                      <span className="text-gray-400 text-xs">
                        {combination.slots.length} slots •{" "}
                        {combination.selectedColors.length} colores
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      <Link
        href="https://www.alba.com.ar/es/paletas-de-colores"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/alba-logo.png"
          alt="Logo de Alba"
          width={60}
          height={24}
          priority
        />
      </Link>
    </header>
  );
}
