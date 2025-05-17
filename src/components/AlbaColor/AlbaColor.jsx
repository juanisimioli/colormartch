"use client";
import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from "react";
import {
  Heart,
  Search,
  Plus,
  Trash2,
  X,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Maximize2,
  Minimize2,
} from "lucide-react";
import { allAlbaColors } from "@/albaColors/helper";

// Función para exportar los datos de la combinación
const exportColorData = (colors) => {
  const colorData = colors.map((color) => ({
    name: color.color.name,
    code: color.color.code,
    hex: color.color.hex,
    rgb: color.color.rgb,
  }));

  const dataStr = JSON.stringify(colorData, null, 2);
  const dataUri =
    "data:application/json;charset=utf-8," + encodeURIComponent(dataStr);

  const exportFileDefaultName = "mi-combinacion-colores.json";

  const linkElement = document.createElement("a");
  linkElement.setAttribute("href", dataUri);
  linkElement.setAttribute("download", exportFileDefaultName);
  linkElement.click();
  linkElement.remove();
};

export default function ColorPaletteApp() {
  const [favorites, setFavorites] = useState([]);
  const [slots, setSlots] = useState([]);
  const [selectedSlotIndex, setSelectedSlotIndex] = useState(null);
  const [selectedColors, setSelectedColors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredColors, setFilteredColors] = useState(allAlbaColors);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [slotsExpanded, setSlotsExpanded] = useState(true);
  const [favoritesExpanded, setFavoritesExpanded] = useState(true);
  const [fullScreenMode, setFullScreenMode] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(33); // Por defecto 33% del ancho

  // Estado para hover en slots durante drag
  const [dragOverSlotIndex, setDragOverSlotIndex] = useState(null);

  // Referencia para el resize del sidebar
  const resizeRef = useRef(null);
  const [isResizing, setIsResizing] = useState(false);

  // Filtrar colores basados en término de búsqueda - Optimizado con useMemo
  const memoizedFilteredColors = useMemo(() => {
    if (!searchTerm) return allAlbaColors;

    const lowercasedSearchTerm = searchTerm.toLowerCase();
    return allAlbaColors.filter(
      (color) =>
        color.name.toLowerCase().includes(lowercasedSearchTerm) ||
        color.code.toLowerCase().includes(lowercasedSearchTerm) ||
        color.category.toLowerCase().includes(lowercasedSearchTerm)
    );
  }, [searchTerm]);

  // Actualizar los colores filtrados solo cuando cambia la búsqueda
  useEffect(() => {
    setFilteredColors(memoizedFilteredColors);
  }, [memoizedFilteredColors]);

  // Cargar datos desde localStorage al iniciar
  useEffect(() => {
    const loadFromLocalStorage = () => {
      const savedFavorites = localStorage.getItem("colorPaletteFavorites");
      const savedSlots = localStorage.getItem("colorPaletteSlots");
      const savedSidebarState = localStorage.getItem(
        "colorPaletteSidebarState"
      );
      const savedSlotsExpanded = localStorage.getItem(
        "colorPaletteSlotsExpanded"
      );
      const savedFavoritesExpanded = localStorage.getItem(
        "colorPaletteFavoritesExpanded"
      );
      const savedFullScreenMode = localStorage.getItem(
        "colorPaletteFullScreenMode"
      );
      const savedSelectedColors = localStorage.getItem("colorPaletteSelection");
      const savedSidebarWidth = localStorage.getItem(
        "colorPaletteSidebarWidth"
      );

      if (savedFavorites) {
        setFavorites(JSON.parse(savedFavorites));
      }

      if (savedSlots) {
        setSlots(JSON.parse(savedSlots));
      }

      if (savedSidebarState !== null) {
        setSidebarCollapsed(JSON.parse(savedSidebarState));
      }

      if (savedSlotsExpanded !== null) {
        setSlotsExpanded(JSON.parse(savedSlotsExpanded));
      }

      if (savedFavoritesExpanded !== null) {
        setFavoritesExpanded(JSON.parse(savedFavoritesExpanded));
      }

      if (savedFullScreenMode !== null) {
        setFullScreenMode(JSON.parse(savedFullScreenMode));
      }

      if (savedSidebarWidth !== null) {
        setSidebarWidth(JSON.parse(savedSidebarWidth));
      }

      if (savedSelectedColors) {
        try {
          const parsedColors = JSON.parse(savedSelectedColors);

          if (Array.isArray(parsedColors)) {
            if (
              parsedColors.length > 0 &&
              parsedColors[0] &&
              !parsedColors[0].hasOwnProperty("slotIndex")
            ) {
              const newFormat = [];
              parsedColors.forEach((color, index) => {
                if (color) {
                  newFormat.push({ slotIndex: index, color });
                }
              });
              setSelectedColors(newFormat);
            } else {
              setSelectedColors(parsedColors);
            }
          }
        } catch (error) {
          console.error("Error loading selected colors", error);
        }
      }
    };

    loadFromLocalStorage();
  }, []);

  // Guardar datos en localStorage cuando cambien - Optimizado con useCallback
  const saveToLocalStorage = useCallback((key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  }, []);

  useEffect(() => {
    saveToLocalStorage("colorPaletteFavorites", favorites);
  }, [favorites, saveToLocalStorage]);

  useEffect(() => {
    saveToLocalStorage("colorPaletteSlots", slots);
  }, [slots, saveToLocalStorage]);

  useEffect(() => {
    saveToLocalStorage("colorPaletteSidebarState", sidebarCollapsed);
  }, [sidebarCollapsed, saveToLocalStorage]);

  useEffect(() => {
    saveToLocalStorage("colorPaletteSlotsExpanded", slotsExpanded);
  }, [slotsExpanded, saveToLocalStorage]);

  useEffect(() => {
    saveToLocalStorage("colorPaletteFavoritesExpanded", favoritesExpanded);
  }, [favoritesExpanded, saveToLocalStorage]);

  useEffect(() => {
    saveToLocalStorage("colorPaletteFullScreenMode", fullScreenMode);
  }, [fullScreenMode, saveToLocalStorage]);

  useEffect(() => {
    saveToLocalStorage("colorPaletteSelection", selectedColors);
  }, [selectedColors, saveToLocalStorage]);

  useEffect(() => {
    saveToLocalStorage("colorPaletteSidebarWidth", sidebarWidth);
  }, [sidebarWidth, saveToLocalStorage]);

  // Handlers para el resize
  const startResize = useCallback((e) => {
    e.preventDefault();
    setIsResizing(true);
  }, []);

  useEffect(() => {
    const handleResize = (e) => {
      if (isResizing) {
        const container = document.querySelector(".main-container");
        if (container) {
          const containerWidth = container.offsetWidth;
          const newWidth = (e.clientX / containerWidth) * 100;
          const clampedWidth = Math.min(Math.max(newWidth, 20), 80);
          setSidebarWidth(clampedWidth);
        }
      }
    };

    const stopResize = () => {
      setIsResizing(false);
    };

    document.addEventListener("mousemove", handleResize);
    document.addEventListener("mouseup", stopResize);

    return () => {
      document.removeEventListener("mousemove", handleResize);
      document.removeEventListener("mouseup", stopResize);
    };
  }, [isResizing]);

  // Toggle favorito
  const toggleFavorite = useCallback((color) => {
    setFavorites((prevFavorites) => {
      const isAlreadyFavorite = prevFavorites.some(
        (fav) => fav.code === color.code
      );
      if (isAlreadyFavorite) {
        return prevFavorites.filter((fav) => fav.code !== color.code);
      } else {
        return [...prevFavorites, color];
      }
    });
  }, []);

  // Crear un nuevo slot
  const createSlot = useCallback(() => {
    setSlots((prevSlots) => {
      const newSlot = {
        name: `Slot ${prevSlots.length + 1}`,
        colors: [],
      };
      return [...prevSlots, newSlot];
    });
  }, []);

  // Renombrar un slot
  const renameSlot = useCallback((index, newName) => {
    setSlots((prevSlots) => {
      const updatedSlots = [...prevSlots];
      updatedSlots[index].name = newName;
      return updatedSlots;
    });
  }, []);

  // Eliminar un slot
  const deleteSlot = useCallback((index) => {
    setSlots((prevSlots) => {
      return prevSlots.filter((_, i) => i !== index);
    });

    // Actualizar selecciones
    setSelectedColors((prevSelectedColors) => {
      // Eliminar cualquier color de este slot
      const filtered = prevSelectedColors.filter(
        (item) => item.slotIndex !== index
      );

      // Actualizar los índices de los slots que quedaron
      return filtered.map((item) => {
        if (item.slotIndex > index) {
          return { ...item, slotIndex: item.slotIndex - 1 };
        }
        return item;
      });
    });
  }, []);

  // Añadir color a un slot desde el catálogo (click)
  const addColorToSlot = useCallback(
    (color) => {
      if (selectedSlotIndex !== null) {
        setSlots((prevSlots) => {
          const updatedSlots = [...prevSlots];
          const existingColorIndex = updatedSlots[
            selectedSlotIndex
          ].colors.findIndex((c) => c.code === color.code);

          // Si ya existe, no hacer nada
          if (existingColorIndex >= 0) {
            return prevSlots; // Sin cambios
          }

          // Añadir el color al final
          updatedSlots[selectedSlotIndex].colors.push({ ...color });
          return updatedSlots;
        });
      }
    },
    [selectedSlotIndex]
  );

  // Eliminar color de un slot
  const removeColorFromSlot = useCallback((slotIndex, colorCode) => {
    setSlots((prevSlots) => {
      const updatedSlots = [...prevSlots];
      updatedSlots[slotIndex].colors = updatedSlots[slotIndex].colors.filter(
        (color) => color.code !== colorCode
      );
      return updatedSlots;
    });

    // Si este color estaba seleccionado, eliminar la selección
    setSelectedColors((prevSelectedColors) => {
      return prevSelectedColors.filter(
        (item) =>
          !(item.slotIndex === slotIndex && item.color.code === colorCode)
      );
    });
  }, []);

  // Función simple para manejar el drag start de un color del catálogo o favoritos
  const handleCatalogColorDragStart = useCallback((event, color) => {
    // El tipo especial nos ayuda a identificar que es un evento del catálogo
    event.dataTransfer.setData(
      "application/json",
      JSON.stringify({
        type: "catalog-color",
        color: color,
      })
    );
  }, []);

  // Función simple para manejar el drag start de un color dentro de un slot
  const handleSlotColorDragStart = useCallback(
    (event, slotIndex, colorIndex, color) => {
      // Indicamos que es un color de un slot y su posición
      event.dataTransfer.setData(
        "application/json",
        JSON.stringify({
          type: "slot-color",
          slotIndex: slotIndex,
          colorIndex: colorIndex,
          color: color,
        })
      );
    },
    []
  );

  // REVISIÓN COMPLETA: Manejar el evento drop en un slot (añadir color nuevo o mover entre slots)
  const handleSlotDrop = useCallback((event, targetSlotIndex) => {
    event.preventDefault();
    setDragOverSlotIndex(null);

    try {
      const dataString = event.dataTransfer.getData("application/json");
      if (!dataString) return;

      const data = JSON.parse(dataString);

      // Caso 1: Arrastrar desde el catálogo
      if (data.type === "catalog-color") {
        const color = data.color;

        setSlots((prevSlots) => {
          // Crear copia profunda de todos los slots
          const newSlots = JSON.parse(JSON.stringify(prevSlots));

          // Comprobar si ya existe
          const existingIndex = newSlots[targetSlotIndex].colors.findIndex(
            (c) => c.code === color.code
          );

          // Si ya existe, no hacer nada
          if (existingIndex >= 0) {
            return newSlots;
          }

          // Si no existe, añadir al final
          newSlots[targetSlotIndex].colors.push({ ...color });
          return newSlots;
        });
      }
      // Caso 2: Mover color entre slots
      else if (data.type === "slot-color") {
        const sourceSlotIndex = data.slotIndex;
        const sourceColorIndex = data.colorIndex;
        const color = data.color;

        // Solo proceder si es un slot diferente
        if (sourceSlotIndex !== targetSlotIndex) {
          setSlots((prevSlots) => {
            // Crear copia profunda de todos los slots para evitar cualquier mutación no deseada
            const newSlots = JSON.parse(JSON.stringify(prevSlots));

            // Verificar que el color aún existe en el slot de origen
            if (
              sourceSlotIndex < newSlots.length &&
              sourceColorIndex < newSlots[sourceSlotIndex].colors.length &&
              newSlots[sourceSlotIndex].colors[sourceColorIndex].code ===
                color.code
            ) {
              // Solo eliminar este color específico
              newSlots[sourceSlotIndex].colors.splice(sourceColorIndex, 1);

              // Verificar si el color ya existe en el destino
              const existingIndex = newSlots[targetSlotIndex].colors.findIndex(
                (c) => c.code === color.code
              );

              // Añadir al destino solo si no existe
              if (existingIndex === -1) {
                newSlots[targetSlotIndex].colors.push({ ...color });
              }
            }

            return newSlots;
          });

          // Actualizar la selección en la combinación principal
          setSelectedColors((prevSelectedColors) => {
            // Crear copia profunda del array de selecciones
            const updatedColors = JSON.parse(
              JSON.stringify(prevSelectedColors)
            );

            // Buscar si el color estaba seleccionado en el slot original
            const selectionIndex = updatedColors.findIndex(
              (item) =>
                item.slotIndex === sourceSlotIndex &&
                item.color.code === color.code
            );

            // Si estaba seleccionado, actualizar su referencia
            if (selectionIndex >= 0) {
              // Verificar si ya hay una selección en el slot destino
              const targetSlotSelectionIndex = updatedColors.findIndex(
                (item) => item.slotIndex === targetSlotIndex
              );

              if (targetSlotSelectionIndex >= 0) {
                // Si ya hay una selección, eliminar la antigua
                updatedColors.splice(selectionIndex, 1);
              } else {
                // Si no hay, actualizar la referencia
                updatedColors[selectionIndex] = {
                  slotIndex: targetSlotIndex,
                  color: { ...color },
                };
              }
            }

            return updatedColors;
          });
        }
      }
    } catch (error) {
      console.error("Error al procesar drop en slot:", error);
    }
  }, []);

  // REVISIÓN COMPLETA: Manejar el evento drop en un color dentro de un slot (reordenar)
  const handleColorPositionDrop = useCallback(
    (event, targetSlotIndex, targetColorIndex) => {
      event.preventDefault();
      event.stopPropagation(); // Importante: evitar que se propague al slot

      try {
        const dataString = event.dataTransfer.getData("application/json");
        if (!dataString) return;

        const data = JSON.parse(dataString);

        // Solo proceder si es un color de un slot
        if (data.type === "slot-color") {
          const sourceSlotIndex = data.slotIndex;
          const sourceColorIndex = data.colorIndex;
          const color = data.color;

          // Caso 1: Reordenar dentro del mismo slot
          if (sourceSlotIndex === targetSlotIndex) {
            // Ignorar si se suelta en la misma posición
            if (sourceColorIndex === targetColorIndex) return;

            setSlots((prevSlots) => {
              // Crear copia profunda de todos los slots
              const newSlots = JSON.parse(JSON.stringify(prevSlots));

              // Verificar que el color aún existe en la posición esperada
              if (
                sourceSlotIndex < newSlots.length &&
                sourceColorIndex < newSlots[sourceSlotIndex].colors.length &&
                newSlots[sourceSlotIndex].colors[sourceColorIndex].code ===
                  color.code
              ) {
                // Eliminar de la posición original
                const [removedColor] = newSlots[sourceSlotIndex].colors.splice(
                  sourceColorIndex,
                  1
                );

                // Calcular el índice de destino correcto después de la eliminación
                let finalTargetIndex = targetColorIndex;
                if (sourceColorIndex < targetColorIndex) {
                  finalTargetIndex = Math.max(0, targetColorIndex - 1);
                }

                // Insertar en la nueva posición
                newSlots[sourceSlotIndex].colors.splice(
                  finalTargetIndex,
                  0,
                  removedColor
                );
              }

              return newSlots;
            });
          }
          // Caso 2: Mover entre slots diferentes con posición específica
          else {
            setSlots((prevSlots) => {
              // Crear copia profunda de todos los slots
              const newSlots = JSON.parse(JSON.stringify(prevSlots));

              // Verificar que el color aún existe en la posición esperada
              if (
                sourceSlotIndex < newSlots.length &&
                sourceColorIndex < newSlots[sourceSlotIndex].colors.length &&
                newSlots[sourceSlotIndex].colors[sourceColorIndex].code ===
                  color.code
              ) {
                // Eliminar de la posición original
                const [removedColor] = newSlots[sourceSlotIndex].colors.splice(
                  sourceColorIndex,
                  1
                );

                // Verificar si ya existe en el destino
                const existingIndex = newSlots[
                  targetSlotIndex
                ].colors.findIndex((c) => c.code === color.code);

                // Si ya existe, no hacer nada (mantener el que ya está)
                if (existingIndex < 0) {
                  // Si no existe, insertar en la posición específica
                  newSlots[targetSlotIndex].colors.splice(
                    Math.min(
                      targetColorIndex,
                      newSlots[targetSlotIndex].colors.length
                    ),
                    0,
                    removedColor
                  );
                }
              }

              return newSlots;
            });

            // Actualizar la selección en la combinación principal
            setSelectedColors((prevSelectedColors) => {
              // Crear copia profunda del array de selecciones
              const updatedColors = JSON.parse(
                JSON.stringify(prevSelectedColors)
              );

              // Buscar si el color estaba seleccionado en el slot original
              const selectionIndex = updatedColors.findIndex(
                (item) =>
                  item.slotIndex === sourceSlotIndex &&
                  item.color.code === color.code
              );

              // Si estaba seleccionado, actualizar su referencia
              if (selectionIndex >= 0) {
                // Verificar si ya hay una selección en el slot destino
                const targetSlotSelectionIndex = updatedColors.findIndex(
                  (item) => item.slotIndex === targetSlotIndex
                );

                if (targetSlotSelectionIndex >= 0) {
                  // Si ya hay una selección, eliminar la antigua
                  updatedColors.splice(selectionIndex, 1);
                } else {
                  // Si no hay, actualizar la referencia
                  updatedColors[selectionIndex] = {
                    slotIndex: targetSlotIndex,
                    color: { ...color },
                  };
                }
              }

              return updatedColors;
            });
          }
        }
      } catch (error) {
        console.error("Error al procesar drop de reordenamiento:", error);
      }
    },
    []
  );

  // Seleccionar un color de un slot para la combinación final - Optimizado
  const selectColorForCombination = useCallback((slotIndex, color) => {
    setSelectedColors((prevSelectedColors) => {
      // Verificar si ya hay un color seleccionado para este slot
      const existingIndex = prevSelectedColors.findIndex(
        (item) => item.slotIndex === slotIndex
      );

      if (existingIndex >= 0) {
        // Reemplazar el color existente
        const newSelectedColors = [...prevSelectedColors];
        newSelectedColors[existingIndex] = { slotIndex, color };
        return newSelectedColors;
      } else {
        // Añadir nuevo color
        return [...prevSelectedColors, { slotIndex, color }];
      }
    });
  }, []);

  // Verificar si un color está seleccionado en un slot - Optimizado con useMemo
  const isColorSelected = useCallback(
    (slotIndex, color) => {
      return selectedColors.some(
        (item) => item.slotIndex === slotIndex && item.color.code === color.code
      );
    },
    [selectedColors]
  );

  // Toggle modo pantalla completa para sección de colores
  const toggleFullScreen = useCallback(() => {
    setFullScreenMode((prev) => !prev);
  }, []);

  // Reordenar colores en la combinación final
  const handleCombinationDragStart = useCallback((index) => {
    const element = document.getElementById(`combination-item-${index}`);
    if (element) {
      element.setAttribute("data-dragging", "true");
    }
  }, []);

  const handleCombinationDrop = useCallback((event, targetIndex) => {
    event.preventDefault();

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

      setSelectedColors((prevColors) => {
        const newColors = [...prevColors];
        const draggedItem = { ...newColors[sourceIndex] };

        // Eliminar de la posición original
        newColors.splice(sourceIndex, 1);

        // Insertar en la nueva posición
        newColors.splice(targetIndex, 0, draggedItem);

        return newColors;
      });
    }
  }, []);

  // Renderizado de un color para el catálogo estándar (Todos los colores)
  const renderColorCard = useCallback(
    (color, idx) => (
      <div
        key={`${color.code}_${idx}`}
        className="w-[100px] relative rounded-md overflow-hidden cursor-pointer border border-gray-700 mb-2"
        onClick={() => selectedSlotIndex !== null && addColorToSlot(color)}
        draggable
        onDragStart={(e) => handleCatalogColorDragStart(e, color)}
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
        </div>
        <button
          className="absolute top-2 right-2 p-1.5 bg-gray-800 bg-opacity-75 rounded-full hover:bg-opacity-90"
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(color);
          }}
        >
          <Heart
            size={18}
            fill={
              favorites.some((fav) => fav.code === color.code)
                ? "red"
                : "transparent"
            }
            stroke={
              favorites.some((fav) => fav.code === color.code) ? "red" : "white"
            }
          />
        </button>
      </div>
    ),
    [
      selectedSlotIndex,
      addColorToSlot,
      toggleFavorite,
      favorites,
      handleCatalogColorDragStart,
    ]
  );

  // Memoizamos el renderizado de los favoritos para optimizar
  const favoritesList = useMemo(() => {
    if (!favorites.length) return null;

    return (
      <div className="mb-4 flex-shrink-0 border border-gray-700 rounded-md overflow-hidden">
        <div className="flex justify-between items-center p-2 bg-gray-700">
          <h2 className="font-bold text-lg">Favoritos</h2>
          <button
            className="p-1 text-gray-300 hover:text-white rounded"
            onClick={() => setFavoritesExpanded(!favoritesExpanded)}
          >
            {favoritesExpanded ? (
              <ChevronUp size={20} />
            ) : (
              <ChevronDown size={20} />
            )}
          </button>
        </div>

        {favoritesExpanded && (
          <div className="p-2">
            <div className="flex flex-wrap gap-2">
              {favorites.map((color, idx) => (
                <div
                  key={`fav-${color.code}-${idx}`}
                  className="w-[100px] relative rounded-md overflow-hidden cursor-pointer border border-gray-700 mb-1"
                  onClick={() =>
                    selectedSlotIndex !== null && addColorToSlot(color)
                  }
                  draggable
                  onDragStart={(e) => handleCatalogColorDragStart(e, color)}
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
                  </div>
                  <button
                    className="absolute top-2 right-2 p-1 bg-gray-800 bg-opacity-75 rounded-full hover:bg-opacity-90"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(color);
                    }}
                  >
                    <Heart size={16} fill="red" stroke="red" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }, [
    favorites,
    favoritesExpanded,
    selectedSlotIndex,
    addColorToSlot,
    toggleFavorite,
    handleCatalogColorDragStart,
  ]);

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="p-4 bg-gray-800 border-b border-gray-700">
        <h1 className="text-2xl font-bold text-center">
          Combinador de Colores de Pintura
        </h1>
      </header>

      {/* Main content */}
      <div className="flex flex-1 overflow-hidden main-container">
        {/* Sidebar - Colapsable hacia la izquierda con ancho ajustable */}
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
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
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
            <div className="p-4 flex flex-col h-full">
              {/* Búsqueda */}
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
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Favoritos - Minimizable y scrollable - Solo visible si no está en modo pantalla completa */}
              {!fullScreenMode && favoritesList}

              {/* Catálogo de Colores */}
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="font-bold text-lg">Todos los Colores</h2>
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

                {/* Contenedor con altura fija y scroll vertical */}
                <div
                  className="overflow-auto flex-grow border border-gray-700 rounded-md p-2"
                  style={{ height: "calc(100% - 40px)" }}
                >
                  <div className="flex flex-wrap gap-2">
                    {filteredColors.map((color, idx) =>
                      renderColorCard(color, idx)
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Main content - Slots y Combinaciones - Solo visible si no está en modo pantalla completa */}
        {!fullScreenMode && (
          <div className="flex-1 p-4 flex flex-col h-full">
            {/* Mi Combinación - Ahora está arriba, siempre visible */}
            {selectedColors.length > 0 && (
              <div className="mb-4 bg-gray-800 p-4 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-3">Mi Combinación</h2>
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
                        onClick={() => {
                          setSelectedColors((prevColors) => {
                            const newSelectedColors = [...prevColors];
                            newSelectedColors.splice(index, 1);
                            return newSelectedColors;
                          });
                        }}
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
                      <div className="text-sm text-gray-400">
                        {item.color.code}
                      </div>
                      <div className="text-xs mt-1">{item.color.hex}</div>
                      <div className="text-xs mt-1 text-gray-400">
                        {item.color.rgb}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Botón para exportar la combinación */}
                <div className="mt-4 flex justify-end">
                  <button
                    className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-md flex items-center gap-2"
                    onClick={() => exportColorData(selectedColors)}
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
            )}

            {/* Sección de Slots - Minimizable, ahora en el área scrollable */}
            <div className="flex-1 overflow-y-auto">
              <div className="mb-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-bold">Mis Colecciones</h2>
                  <button
                    className="p-1 text-gray-300 hover:text-white rounded"
                    onClick={() => setSlotsExpanded(!slotsExpanded)}
                  >
                    {slotsExpanded ? (
                      <ChevronDown size={20} />
                    ) : (
                      <ChevronRight size={20} />
                    )}
                  </button>
                </div>
                <button
                  className="flex items-center gap-1 px-3 py-1 bg-gray-600 hover:bg-gray-700 rounded-md"
                  onClick={createSlot}
                >
                  <Plus size={16} />
                  <span>Nuevo Slot</span>
                </button>
              </div>

              {/* Lista de Slots */}
              {slotsExpanded && (
                <div className="space-y-4">
                  {slots.map((slot, slotIndex) => (
                    <div
                      key={`slot-${slotIndex}`}
                      className={`p-3 rounded-md ${
                        selectedSlotIndex === slotIndex
                          ? "bg-gray-700 ring-2 ring-gray-500"
                          : dragOverSlotIndex === slotIndex
                          ? "bg-gray-700 border border-dashed border-gray-400"
                          : "bg-gray-800"
                      } transition-colors duration-200`}
                      onDragOver={(e) => {
                        e.preventDefault();
                        setDragOverSlotIndex(slotIndex);
                      }}
                      onDragEnter={() => setDragOverSlotIndex(slotIndex)}
                      onDragLeave={() => setDragOverSlotIndex(null)}
                      onDrop={(e) => handleSlotDrop(e, slotIndex)}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-2">
                          <input
                            type="text"
                            value={slot.name}
                            onChange={(e) =>
                              renameSlot(slotIndex, e.target.value)
                            }
                            className="bg-transparent border-b border-gray-600 focus:border-gray-500 focus:outline-none px-1"
                          />
                          <span className="text-sm text-gray-400">
                            ({slot.colors.length} colores)
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <button
                            className={`px-2 py-1 rounded-md ${
                              selectedSlotIndex === slotIndex
                                ? "bg-gray-700"
                                : "bg-gray-600 hover:bg-gray-700"
                            }`}
                            onClick={() => setSelectedSlotIndex(slotIndex)}
                          >
                            Seleccionar
                          </button>
                          <button
                            className="p-1 text-gray-400 hover:text-red-500"
                            onClick={() => deleteSlot(slotIndex)}
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>

                      {/* Colores en el slot */}
                      <div className="flex flex-wrap gap-2">
                        {slot.colors.map((color, colorIndex) => (
                          <div
                            key={`slot-${slotIndex}-color-${colorIndex}`}
                            className="w-[100px] relative rounded-md overflow-hidden cursor-pointer border border-gray-700 mb-2"
                            onClick={() =>
                              selectColorForCombination(slotIndex, color)
                            }
                            draggable
                            onDragStart={(e) =>
                              handleSlotColorDragStart(
                                e,
                                slotIndex,
                                colorIndex,
                                color
                              )
                            }
                            onDragOver={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                            }}
                            onDrop={(e) =>
                              handleColorPositionDrop(e, slotIndex, colorIndex)
                            }
                          >
                            <div
                              className="w-full"
                              style={{
                                backgroundColor: color.hex || "#e0e0e0",
                                height: "70px",
                              }}
                            ></div>
                            <div className="p-2 text-xs bg-gray-800">
                              <div className="font-medium truncate">
                                {color.name}
                              </div>
                              <div className="text-gray-300 text-xs">
                                {color.code}
                              </div>
                            </div>
                            <button
                              className="absolute top-1 right-1 p-1 bg-gray-800 bg-opacity-60 rounded-full"
                              onClick={(e) => {
                                e.stopPropagation();
                                removeColorFromSlot(slotIndex, color.code);
                              }}
                            >
                              <X size={12} />
                            </button>
                            {isColorSelected(slotIndex, color) && (
                              <div className="absolute inset-0 border-2 border-yellow-400 pointer-events-none"></div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}

                  {slots.length === 0 && (
                    <div className="text-center p-10 text-gray-400">
                      <p>
                        No hay slots creados. Crea tu primer slot para comenzar.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
