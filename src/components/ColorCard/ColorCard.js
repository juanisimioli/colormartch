"use client";
import React from "react";
import { Heart } from "lucide-react";
import { useColorPaletteContext } from "@/context/ColorPaletteContext";

export default function ColorCard({ color, isFavorite, onClick, onDragStart }) {
  const { dispatch, ACTION_TYPES } = useColorPaletteContext();

  const handleFavoriteToggle = (e) => {
    e.stopPropagation();
    dispatch({
      type: ACTION_TYPES.TOGGLE_FAVORITE,
      payload: color,
    });
  };

  return (
    <div
      className="w-[100px] relative rounded-md overflow-hidden cursor-pointer border border-gray-700 mb-2"
      onClick={onClick}
      draggable
      onDragStart={(e) => onDragStart(e, color)}
    >
      <div
        className="w-full"
        style={{
          backgroundColor: color.hex || "#e0e0e0",
          height: "70px",
        }}
      ></div>
      <div className="p-2 text-xs bg-gray-800">
        <div className="font-medium truncate">{color.name}</div>
        <div className="text-gray-300 text-xs">{color.code}</div>
        {/* Mostrar page y section si están disponibles */}
        {color.page && color.section && (
          <div className="text-gray-400 text-xs mt-1">
            {color.page} / {color.section}
          </div>
        )}
      </div>
      <button
        className="absolute top-2 right-2 p-1.5 bg-gray-800 bg-opacity-75 rounded-full hover:bg-opacity-90"
        onClick={handleFavoriteToggle}
      >
        <Heart
          size={18}
          fill={isFavorite ? "red" : "transparent"}
          stroke={isFavorite ? "red" : "white"}
        />
      </button>
    </div>
  );
}
