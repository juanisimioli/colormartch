"use client";
import React from "react";
import { ColorPaletteProvider } from "@/context/ColorPaletteContext";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import SlotsList from "../SlotList/SlotList";
import Combination from "../Combination/Combination";
import CombinationManager from "../CombinationManager/CombinationManager";
import { useColorPaletteContext } from "@/context/ColorPaletteContext";

const scrollbarStyles = `
  .custom-scrollbar::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-track {
    background: #1f2937; /* bg-gray-800 */
    border-radius: 4px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: #4b5563; /* bg-gray-600 */
    border-radius: 4px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #6b7280; /* bg-gray-500 */
  }
`;

// Componente interno que accede al contexto
function ColorPaletteContent() {
  const { state } = useColorPaletteContext();
  const { combinations, activeCombinationIndex, fullScreenMode } = state;

  // Obtener la combinación activa
  const currentCombination = combinations[activeCombinationIndex];
  const selectedColors = currentCombination?.selectedColors || [];

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      {/* Estilos en línea para el scrollbar personalizado */}
      <style jsx>{scrollbarStyles}</style>
      {/* Header */}
      <Header />

      {/* Main content */}
      <div className="flex flex-1 overflow-hidden main-container">
        {/* Sidebar - Colapsable con ancho ajustable */}
        <Sidebar />

        {/* Main content - Solo visible si no está en modo pantalla completa */}
        {!fullScreenMode && (
          <div className="flex-1 p-4 flex flex-col h-full">
            {/* Gestión de Combinaciones */}
            <CombinationManager />

            {/* Combinación actual - Visible si tiene colores seleccionados */}
            {selectedColors.length > 0 && <Combination />}

            {/* Sección de Slots */}
            <SlotsList />
          </div>
        )}
      </div>
    </div>
  );
}

// Componente principal que provee el contexto
export default function ColorPaletteApp() {
  return (
    <ColorPaletteProvider>
      <ColorPaletteContent />
    </ColorPaletteProvider>
  );
}
