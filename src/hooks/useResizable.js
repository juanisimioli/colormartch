import { useState, useCallback, useEffect } from "react";

/**
 * Hook para manejar la funcionalidad de redimensionar elementos
 * @param {Function} onWidthChange - Callback para el cambio de ancho
 * @param {Number} initialWidth - Ancho inicial del elemento
 * @param {Number} minWidth - Ancho mínimo permitido (porcentaje)
 * @param {Number} maxWidth - Ancho máximo permitido (porcentaje)
 * @returns {Object} - Estado y manejadores para el resize
 */
export function useResizable(
  onWidthChange,
  initialWidth = 33,
  minWidth = 20,
  maxWidth = 80
) {
  const [isResizing, setIsResizing] = useState(false);

  // Iniciar el proceso de redimensionamiento
  const startResize = useCallback((e) => {
    e.preventDefault();
    setIsResizing(true);
  }, []);

  // Efectos para manejar eventos de mouse durante el redimensionamiento
  useEffect(() => {
    const handleResize = (e) => {
      if (!isResizing) return;

      const container = document.querySelector(".main-container");
      if (container) {
        const containerWidth = container.offsetWidth;
        const newWidth = (e.clientX / containerWidth) * 100;
        const clampedWidth = Math.min(Math.max(newWidth, minWidth), maxWidth);
        onWidthChange(clampedWidth);
      }
    };

    const stopResize = () => {
      setIsResizing(false);
    };

    // Agregar los event listeners solo cuando isResizing es true
    if (isResizing) {
      document.addEventListener("mousemove", handleResize);
      document.addEventListener("mouseup", stopResize);
    }

    // Cleanup function
    return () => {
      document.removeEventListener("mousemove", handleResize);
      document.removeEventListener("mouseup", stopResize);
    };
  }, [isResizing, minWidth, maxWidth, onWidthChange]);

  return {
    isResizing,
    startResize,
  };
}
