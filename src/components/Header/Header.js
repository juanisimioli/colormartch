"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  Plus,
  Upload,
  Download,
  Trash2,
  Edit2,
} from "lucide-react";
import { useColorPaletteContext } from "@/context/ColorPaletteContext";
import {
  exportCombination,
  exportAllCombinations,
  importCombination,
} from "@/utils/exportUtils";
import ConfirmModal from "../ConfirmModal/ConfirmModal";

export default function Header() {
  const { state, dispatch, ACTION_TYPES } = useColorPaletteContext();
  const { combinations, activeCombinationIndex } = state;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [combinationToDelete, setCombinationToDelete] = useState(null);
  const [editingCombination, setEditingCombination] = useState(null);
  const [editingName, setEditingName] = useState("");

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

  // Iniciar eliminación de combinación
  const handleDeleteCombination = (index, combinationName) => {
    setCombinationToDelete(index);
    setShowDeleteModal(true);
    setIsDropdownOpen(false);
  };

  // Confirmar eliminación
  const confirmDeleteCombination = () => {
    if (combinationToDelete !== null) {
      dispatch({
        type: ACTION_TYPES.DELETE_COMBINATION,
        payload: combinationToDelete,
      });
      setCombinationToDelete(null);
    }
  };

  // Iniciar edición de nombre
  const startEditingCombination = (index, currentName) => {
    setEditingCombination(index);
    setEditingName(currentName);
  };

  // Confirmar edición de nombre
  const confirmEditCombination = () => {
    if (editingCombination !== null && editingName.trim()) {
      dispatch({
        type: ACTION_TYPES.RENAME_COMBINATION,
        payload: { index: editingCombination, newName: editingName.trim() },
      });
    }
    setEditingCombination(null);
    setEditingName("");
  };

  // Cancelar edición
  const cancelEditCombination = () => {
    setEditingCombination(null);
    setEditingName("");
  };

  return (
    <>
      <header className="p-3 px-8 bg-gray-800 border-b border-gray-700 flex items-center justify-between">
        {/* Título centrado */}
        <div className="flex-1 flex justify-center">
          <h1 className="text-xl font-bold text-white">Color Match</h1>
        </div>

        {/* Controles del lado derecho */}
        <div className="flex items-center gap-6">
          {/* Dropdown de gestión de combinaciones */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md text-white transition-colors"
            >
              <span className="text-sm font-medium max-w-48 truncate">
                {currentCombination?.name}
              </span>
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isDropdownOpen && (
              <>
                {/* Overlay para cerrar dropdown */}
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setIsDropdownOpen(false)}
                />

                {/* Dropdown content */}
                <div className="absolute right-0 mt-2 w-80 bg-gray-700 rounded-md shadow-lg z-20 border border-gray-600">
                  <div className="p-3 border-b border-gray-600">
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={handleCreateCombination}
                        className="flex items-center justify-center gap-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-sm transition-colors"
                      >
                        <Plus size={14} />
                        Nueva
                      </button>
                      <button
                        onClick={handleImportCombination}
                        className="flex items-center justify-center gap-1 px-3 py-2 bg-green-600 hover:bg-green-700 rounded-md text-sm transition-colors"
                      >
                        <Upload size={14} />
                        Importar
                      </button>
                      <button
                        onClick={handleExportCurrent}
                        className="flex items-center justify-center gap-1 px-3 py-2 bg-gray-600 hover:bg-gray-500 rounded-md text-sm transition-colors"
                      >
                        <Download size={14} />
                        Exportar Actual
                      </button>
                      <button
                        onClick={handleExportAll}
                        className="flex items-center justify-center gap-1 px-3 py-2 bg-gray-600 hover:bg-gray-500 rounded-md text-sm transition-colors"
                      >
                        <Download size={14} />
                        Exportar Todas
                      </button>
                    </div>
                  </div>

                  <div className="max-h-64 overflow-y-auto custom-scrollbar">
                    {combinations.map((combination, index) => (
                      <div
                        key={combination.id}
                        className={`p-3 border-b border-gray-600 last:border-b-0 hover:bg-gray-600 transition-colors ${
                          index === activeCombinationIndex ? "bg-gray-600" : ""
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex-1 min-w-0">
                            {editingCombination === index ? (
                              <div className="flex items-center gap-2">
                                <input
                                  type="text"
                                  value={editingName}
                                  onChange={(e) =>
                                    setEditingName(e.target.value)
                                  }
                                  onKeyDown={(e) => {
                                    if (e.key === "Enter")
                                      confirmEditCombination();
                                    if (e.key === "Escape")
                                      cancelEditCombination();
                                  }}
                                  onBlur={confirmEditCombination}
                                  className="flex-1 px-2 py-1 bg-gray-800 border border-gray-500 rounded text-white text-sm"
                                  autoFocus
                                />
                              </div>
                            ) : (
                              <div
                                className="cursor-pointer"
                                onClick={() => {
                                  dispatch({
                                    type: ACTION_TYPES.SET_ACTIVE_COMBINATION,
                                    payload: index,
                                  });
                                  setIsDropdownOpen(false);
                                }}
                              >
                                <div className="text-white text-sm font-medium truncate">
                                  {combination.name}
                                </div>
                                <div className="text-gray-400 text-xs">
                                  {combination.slots.length} slots •{" "}
                                  {combination.selectedColors.length} colores
                                </div>
                              </div>
                            )}
                          </div>

                          {editingCombination !== index && (
                            <div className="flex items-center gap-1">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  startEditingCombination(
                                    index,
                                    combination.name
                                  );
                                }}
                                className="p-1 text-gray-400 hover:text-white rounded transition-colors"
                                title="Editar nombre"
                              >
                                <Edit2 size={14} />
                              </button>
                              {combinations.length > 1 && (
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleDeleteCombination(
                                      index,
                                      combination.name
                                    );
                                  }}
                                  className="p-1 text-gray-400 hover:text-red-400 rounded transition-colors"
                                  title="Eliminar combinación"
                                >
                                  <Trash2 size={14} />
                                </button>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Logo de Alba */}
          <Link
            href="https://www.alba.com.ar/es/paletas-de-colores"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0"
          >
            <Image
              src="/alba-logo.png"
              alt="Logo de Alba"
              width={60}
              height={24}
              priority
              className="transition-opacity hover:opacity-80"
            />
          </Link>
        </div>
      </header>

      {/* Modal de confirmación para eliminar combinación */}
      <ConfirmModal
        isOpen={showDeleteModal}
        onClose={() => {
          setShowDeleteModal(false);
          setCombinationToDelete(null);
        }}
        onConfirm={confirmDeleteCombination}
        title="Eliminar Combinación"
        message={`¿Estás seguro de que quieres eliminar esta combinación? Esta acción no se puede deshacer.`}
      />
    </>
  );
}
