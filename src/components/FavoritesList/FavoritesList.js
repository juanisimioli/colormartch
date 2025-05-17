"use client";
import React from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { useColorPaletteContext } from "@/context/ColorPaletteContext";
import ColorCard from "../ColorCard/ColorCard";

export default function FavoritesList() {
  const { state, dispatch, ACTION_TYPES } = useColorPaletteContext();
  const { favorites, favoritesExpanded, selectedSlotIndex } = state;

  // Si no hay favoritos, no mostrar el componente
  if (!favorites.length) return null;

  const toggleFavoritesExpanded = () => {
    dispatch({
      type: ACTION_TYPES.SET_FAVORITES_EXPANDED,
      payload: !favoritesExpanded,
    });
  };

  const handleColorClick = (color) => {
    if (selectedSlotIndex !== null) {
      dispatch({
        type: ACTION_TYPES.ADD_COLOR_TO_SLOT,
        payload: { slotIndex: selectedSlotIndex, color },
      });
    }
  };

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
    <div className="mb-4 flex-shrink-0 border border-gray-700 rounded-md overflow-hidden">
      <div className="flex justify-between items-center p-2 bg-gray-700">
        <h2 className="font-bold text-lg">Favoritos</h2>
        <button
          className="p-1 text-gray-300 hover:text-white rounded"
          onClick={toggleFavoritesExpanded}
        >
          {favoritesExpanded ? (
            <ChevronUp size={20} />
          ) : (
            <ChevronDown size={20} />
          )}
        </button>
      </div>

      {favoritesExpanded && (
        <div className="p-2 max-h-40">
          <div className="flex flex-nowrap overflow-x-auto pb-2 custom-scrollbar">
            {favorites.map((color, idx) => (
              <div
                className="flex-shrink-0 mr-2"
                key={`fav-wrapper-${color.code}-${idx}`}
              >
                <ColorCard
                  key={`fav-${color.code}-${idx}`}
                  color={color}
                  isFavorite={true}
                  onClick={() => handleColorClick(color)}
                  onDragStart={(e) => handleColorDragStart(e, color)}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
