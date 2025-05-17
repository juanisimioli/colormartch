"use client";
import React, { useRef } from "react";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
} from "lucide-react";
import { useColorPaletteContext } from "@/context/ColorPaletteContext";
import { useResizable } from "@/hooks/useResizable";
import { allAlbaColors } from "@/albaColors/helper";
import FavoritesList from "../FavoritesList/FavoritesList";
import ColorCard from "../ColorCard/ColorCard";

export default function Sidebar() {
  const { state, dispatch, ACTION_TYPES } = useColorPaletteContext();
  const {
    sidebarCollapsed,
    fullScreenMode,
    sidebarWidth,
    filteredColors,
    favorites,
    searchTerm,
    combinations,
    activeCombinationIndex,
  } = state;

  // Obtener la combinación activa
  const currentCombination = combinations[activeCombinationIndex];
  const selectedSlotIndex = currentCombination?.selectedSlotIndex;

  // Referencia para el resize del sidebar
  const resizeRef = useRef(null);

  // Usar el hook de redimensionamiento
  const { startResize } = useResizable((newWidth) => {
    dispatch({
      type: ACTION_TYPES.SET_SIDEBAR_WIDTH,
      payload: newWidth,
    });
  }, sidebarWidth);

  // Toggle collapse del sidebar
  const toggleSidebar = () => {
    dispatch({
      type: ACTION_TYPES.SET_SIDEBAR_COLLAPSED,
      payload: !sidebarCollapsed,
    });
  };

  // Toggle modo pantalla completa
  const toggleFullScreen = () => {
    dispatch({
      type: ACTION_TYPES.SET_FULL_SCREEN_MODE,
      payload: !fullScreenMode,
    });
  };

  // Manejar cambio en la búsqueda
  const handleSearchChange = (e) => {
    dispatch({
      type: ACTION_TYPES.SET_SEARCH_TERM,
      payload: e.target.value,
    });
  };

  // Manejar click en un color
  const handleColorClick = (color) => {
    if (selectedSlotIndex !== null) {
      dispatch({
        type: ACTION_TYPES.ADD_COLOR_TO_SLOT,
        payload: { slotIndex: selectedSlotIndex, color },
      });
    }
  };

  // Manejar el drag start de un color
  const handleColorDragStart = (e, color) => {
    e.dataTransfer.setData(
      "application/json",
      JSON.stringify({
        type: "catalog-color",
        color: color,
      })
    );
  };

  return (
    <>
      <div
        className={`transition-all duration-300 ${
          sidebarCollapsed ? "w-12" : fullScreenMode ? "w-full" : ""
        } bg-gray-800 flex flex-col h-full relative border-r border-gray-700`}
        style={{
          width: sidebarCollapsed
            ? "3rem"
            : fullScreenMode
            ? "100%"
            : `${sidebarWidth}%`,
        }}
      >
        {/* Botón para colapsar/expandir */}
        {!fullScreenMode && (
          <button
            className="absolute -right-3 top-1/2 transform -translate-y-1/2 bg-gray-700 p-1 rounded-full z-10 border border-gray-600"
            onClick={toggleSidebar}
          >
            {sidebarCollapsed ? (
              <ChevronRight size={18} />
            ) : (
              <ChevronLeft size={18} />
            )}
          </button>
        )}

        {/* Manejador de resize - Solo visible cuando no está colapsado ni expandido */}
        {!sidebarCollapsed && !fullScreenMode && (
          <div
            ref={resizeRef}
            className="absolute -right-1 top-0 w-2 h-full cursor-col-resize z-10"
            onMouseDown={startResize}
          />
        )}

        {/* Contenido del sidebar - solo visible cuando no está colapsado */}
        {!sidebarCollapsed && (
          <div className="p-4 flex flex-col h-full overflow-hidden">
            {/* Búsqueda - tamaño fijo */}
            <div className="relative mb-4 flex-shrink-0">
              <Search
                className="absolute left-3 top-3 text-gray-400"
                size={16}
              />
              <input
                type="text"
                placeholder="Buscar colores..."
                className="w-full pl-10 pr-4 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>

            {/* Favoritos - tamaño fijo */}
            {!fullScreenMode && (
              <div className="flex-shrink-0 mb-4">
                <FavoritesList />
              </div>
            )}

            {/* Catálogo de Colores - toma todo el espacio restante */}
            <div className="flex flex-col flex-grow overflow-hidden">
              <div className="flex justify-between items-center mb-2 flex-shrink-0">
                <div className="flex flex-col">
                  <h2 className="font-bold text-lg">Todos los Colores</h2>
                  <span className="text-sm text-gray-400">
                    {searchTerm
                      ? `${filteredColors.length} de ${allAlbaColors.length} colores`
                      : `${filteredColors.length} colores`}
                  </span>
                </div>
                <button
                  className="p-1 text-gray-300 hover:text-white rounded"
                  onClick={toggleFullScreen}
                  title={fullScreenMode ? "Minimizar" : "Maximizar"}
                >
                  {fullScreenMode ? (
                    <Minimize2 size={20} />
                  ) : (
                    <Maximize2 size={20} />
                  )}
                </button>
              </div>

              {/* Contenedor con scroll - ocupa automáticamente el espacio restante */}
              <div className="overflow-auto flex-grow border border-gray-700 rounded-md p-2 custom-scrollbar">
                <div className="flex flex-wrap gap-2">
                  {filteredColors.map((color, idx) => (
                    <ColorCard
                      key={`${color.code}_${idx}`}
                      color={color}
                      isFavorite={favorites.some(
                        (fav) => fav.code === color.code
                      )}
                      onClick={() => handleColorClick(color)}
                      onDragStart={(e) => handleColorDragStart(e, color)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
