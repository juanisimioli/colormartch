"use client";
import React, { createContext, useContext, useReducer, useEffect } from "react";
import { allAlbaColors } from "@/albaColors/helper";

const ColorPaletteContext = createContext();

// Estado inicial
const initialState = {
  favorites: [],
  slots: [],
  selectedSlotIndex: null,
  selectedColors: [],
  searchTerm: "",
  filteredColors: allAlbaColors,
  sidebarCollapsed: false,
  slotsExpanded: true,
  favoritesExpanded: true,
  fullScreenMode: false,
  sidebarWidth: 33,
  dragOverSlotIndex: null,
};

// Tipos de acciones
const ACTION_TYPES = {
  SET_FAVORITES: "SET_FAVORITES",
  TOGGLE_FAVORITE: "TOGGLE_FAVORITE",
  SET_SLOTS: "SET_SLOTS",
  CREATE_SLOT: "CREATE_SLOT",
  RENAME_SLOT: "RENAME_SLOT",
  DELETE_SLOT: "DELETE_SLOT",
  SET_SELECTED_SLOT_INDEX: "SET_SELECTED_SLOT_INDEX",
  ADD_COLOR_TO_SLOT: "ADD_COLOR_TO_SLOT",
  REMOVE_COLOR_FROM_SLOT: "REMOVE_COLOR_FROM_SLOT",
  REORDER_COLORS_IN_SLOT: "REORDER_COLORS_IN_SLOT",
  MOVE_COLOR_BETWEEN_SLOTS: "MOVE_COLOR_BETWEEN_SLOTS",
  SET_SELECTED_COLORS: "SET_SELECTED_COLORS",
  SELECT_COLOR_FOR_COMBINATION: "SELECT_COLOR_FOR_COMBINATION",
  REMOVE_COLOR_FROM_COMBINATION: "REMOVE_COLOR_FROM_COMBINATION",
  REORDER_COMBINATION_COLORS: "REORDER_COMBINATION_COLORS",
  SET_SEARCH_TERM: "SET_SEARCH_TERM",
  SET_FILTERED_COLORS: "SET_FILTERED_COLORS",
  SET_SIDEBAR_COLLAPSED: "SET_SIDEBAR_COLLAPSED",
  SET_SLOTS_EXPANDED: "SET_SLOTS_EXPANDED",
  SET_FAVORITES_EXPANDED: "SET_FAVORITES_EXPANDED",
  SET_FULL_SCREEN_MODE: "SET_FULL_SCREEN_MODE",
  SET_SIDEBAR_WIDTH: "SET_SIDEBAR_WIDTH",
  SET_DRAG_OVER_SLOT_INDEX: "SET_DRAG_OVER_SLOT_INDEX",
};

function colorPaletteReducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.SET_FAVORITES:
      return { ...state, favorites: action.payload };

    case ACTION_TYPES.TOGGLE_FAVORITE: {
      const color = action.payload;
      const isAlreadyFavorite = state.favorites.some(
        (fav) => fav.code === color.code
      );

      if (isAlreadyFavorite) {
        return {
          ...state,
          favorites: state.favorites.filter((fav) => fav.code !== color.code),
        };
      } else {
        return {
          ...state,
          favorites: [...state.favorites, color],
        };
      }
    }

    case ACTION_TYPES.SET_SLOTS:
      return { ...state, slots: action.payload };

    case ACTION_TYPES.CREATE_SLOT: {
      const newSlot = {
        name: `Slot ${state.slots.length + 1}`,
        colors: [],
      };
      return {
        ...state,
        slots: [...state.slots, newSlot],
      };
    }

    case ACTION_TYPES.RENAME_SLOT: {
      const { index, newName } = action.payload;
      const updatedSlots = [...state.slots];
      updatedSlots[index].name = newName;
      return {
        ...state,
        slots: updatedSlots,
      };
    }

    case ACTION_TYPES.DELETE_SLOT: {
      const slotIndex = action.payload;
      // Filtrar los slots
      const newSlots = state.slots.filter((_, i) => i !== slotIndex);

      // Actualizar selecciones
      const newSelectedColors = state.selectedColors
        .filter((item) => item.slotIndex !== slotIndex)
        .map((item) => {
          if (item.slotIndex > slotIndex) {
            return { ...item, slotIndex: item.slotIndex - 1 };
          }
          return item;
        });

      return {
        ...state,
        slots: newSlots,
        selectedColors: newSelectedColors,
        selectedSlotIndex:
          state.selectedSlotIndex === slotIndex
            ? null
            : state.selectedSlotIndex > slotIndex
            ? state.selectedSlotIndex - 1
            : state.selectedSlotIndex,
      };
    }

    case ACTION_TYPES.SET_SELECTED_SLOT_INDEX:
      return { ...state, selectedSlotIndex: action.payload };

    case ACTION_TYPES.ADD_COLOR_TO_SLOT: {
      const { slotIndex, color } = action.payload;

      if (slotIndex === null) return state;

      const updatedSlots = [...state.slots];
      const existingColorIndex = updatedSlots[slotIndex].colors.findIndex(
        (c) => c.code === color.code
      );

      // Si ya existe, no hacer nada
      if (existingColorIndex >= 0) return state;

      // Añadir el color al final
      updatedSlots[slotIndex].colors.push({ ...color });

      return {
        ...state,
        slots: updatedSlots,
      };
    }

    case ACTION_TYPES.REMOVE_COLOR_FROM_SLOT: {
      const { slotIndex, colorCode } = action.payload;

      const updatedSlots = [...state.slots];
      updatedSlots[slotIndex].colors = updatedSlots[slotIndex].colors.filter(
        (color) => color.code !== colorCode
      );

      // Si este color estaba seleccionado, eliminar la selección
      const updatedSelectedColors = state.selectedColors.filter(
        (item) =>
          !(item.slotIndex === slotIndex && item.color.code === colorCode)
      );

      return {
        ...state,
        slots: updatedSlots,
        selectedColors: updatedSelectedColors,
      };
    }

    case ACTION_TYPES.REORDER_COLORS_IN_SLOT: {
      const { slotIndex, sourceColorIndex, targetColorIndex } = action.payload;

      // Ignorar si es la misma posición
      if (sourceColorIndex === targetColorIndex) return state;

      const newSlots = JSON.parse(JSON.stringify(state.slots));
      const [removedColor] = newSlots[slotIndex].colors.splice(
        sourceColorIndex,
        1
      );

      // Calcular el índice de destino correcto después de la eliminación
      let finalTargetIndex = targetColorIndex;
      if (sourceColorIndex < targetColorIndex) {
        finalTargetIndex = Math.max(0, targetColorIndex - 1);
      }

      // Insertar en la nueva posición
      newSlots[slotIndex].colors.splice(finalTargetIndex, 0, removedColor);

      return {
        ...state,
        slots: newSlots,
      };
    }

    case ACTION_TYPES.MOVE_COLOR_BETWEEN_SLOTS: {
      const {
        sourceSlotIndex,
        sourceColorIndex,
        targetSlotIndex,
        targetColorIndex,
        color,
      } = action.payload;

      // Solo proceder si es un slot diferente
      if (sourceSlotIndex === targetSlotIndex) return state;

      // Crear copia profunda de todos los slots
      const newSlots = JSON.parse(JSON.stringify(state.slots));

      // Verificar que el color aún existe en la posición esperada
      if (
        sourceSlotIndex >= newSlots.length ||
        sourceColorIndex >= newSlots[sourceSlotIndex].colors.length ||
        newSlots[sourceSlotIndex].colors[sourceColorIndex].code !== color.code
      ) {
        return state;
      }

      // Eliminar de la posición original
      const [removedColor] = newSlots[sourceSlotIndex].colors.splice(
        sourceColorIndex,
        1
      );

      // Verificar si ya existe en el destino
      const existingIndex = newSlots[targetSlotIndex].colors.findIndex(
        (c) => c.code === color.code
      );

      // Si no existe, insertar en la posición específica o al final
      if (existingIndex < 0) {
        if (targetColorIndex !== undefined) {
          newSlots[targetSlotIndex].colors.splice(
            Math.min(targetColorIndex, newSlots[targetSlotIndex].colors.length),
            0,
            removedColor
          );
        } else {
          newSlots[targetSlotIndex].colors.push(removedColor);
        }
      }

      // Actualizar la selección
      let updatedSelectedColors = [...state.selectedColors];
      const selectionIndex = updatedSelectedColors.findIndex(
        (item) =>
          item.slotIndex === sourceSlotIndex && item.color.code === color.code
      );

      if (selectionIndex >= 0) {
        // Verificar si ya hay una selección en el slot destino
        const targetSlotSelectionIndex = updatedSelectedColors.findIndex(
          (item) => item.slotIndex === targetSlotIndex
        );

        if (targetSlotSelectionIndex >= 0) {
          // Si ya hay una selección, eliminar la antigua
          updatedSelectedColors.splice(selectionIndex, 1);
        } else {
          // Si no hay, actualizar la referencia
          updatedSelectedColors[selectionIndex] = {
            slotIndex: targetSlotIndex,
            color: { ...color },
          };
        }
      }

      return {
        ...state,
        slots: newSlots,
        selectedColors: updatedSelectedColors,
      };
    }

    case ACTION_TYPES.SET_SELECTED_COLORS:
      return { ...state, selectedColors: action.payload };

    case ACTION_TYPES.SELECT_COLOR_FOR_COMBINATION: {
      const { slotIndex, color } = action.payload;

      // Verificar si ya hay un color seleccionado para este slot
      const existingIndex = state.selectedColors.findIndex(
        (item) => item.slotIndex === slotIndex
      );

      let newSelectedColors;
      if (existingIndex >= 0) {
        // Reemplazar el color existente
        newSelectedColors = [...state.selectedColors];
        newSelectedColors[existingIndex] = { slotIndex, color };
      } else {
        // Añadir nuevo color
        newSelectedColors = [...state.selectedColors, { slotIndex, color }];
      }

      return {
        ...state,
        selectedColors: newSelectedColors,
      };
    }

    case ACTION_TYPES.REMOVE_COLOR_FROM_COMBINATION: {
      const index = action.payload;
      const newSelectedColors = [...state.selectedColors];
      newSelectedColors.splice(index, 1);

      return {
        ...state,
        selectedColors: newSelectedColors,
      };
    }

    case ACTION_TYPES.REORDER_COMBINATION_COLORS: {
      const { sourceIndex, targetIndex } = action.payload;

      // Ignorar si se suelta en la misma posición
      if (sourceIndex === targetIndex) return state;

      const newColors = [...state.selectedColors];
      const draggedItem = { ...newColors[sourceIndex] };

      // Eliminar de la posición original
      newColors.splice(sourceIndex, 1);

      // Insertar en la nueva posición
      newColors.splice(targetIndex, 0, draggedItem);

      return {
        ...state,
        selectedColors: newColors,
      };
    }

    case ACTION_TYPES.SET_SEARCH_TERM:
      return { ...state, searchTerm: action.payload };

    case ACTION_TYPES.SET_FILTERED_COLORS:
      return { ...state, filteredColors: action.payload };

    case ACTION_TYPES.SET_SIDEBAR_COLLAPSED:
      return { ...state, sidebarCollapsed: action.payload };

    case ACTION_TYPES.SET_SLOTS_EXPANDED:
      return { ...state, slotsExpanded: action.payload };

    case ACTION_TYPES.SET_FAVORITES_EXPANDED:
      return { ...state, favoritesExpanded: action.payload };

    case ACTION_TYPES.SET_FULL_SCREEN_MODE:
      return { ...state, fullScreenMode: action.payload };

    case ACTION_TYPES.SET_SIDEBAR_WIDTH:
      return { ...state, sidebarWidth: action.payload };

    case ACTION_TYPES.SET_DRAG_OVER_SLOT_INDEX:
      return { ...state, dragOverSlotIndex: action.payload };

    default:
      return state;
  }
}

// Provider del contexto
export function ColorPaletteProvider({ children }) {
  const [state, dispatch] = useReducer(colorPaletteReducer, initialState);

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
        dispatch({
          type: ACTION_TYPES.SET_FAVORITES,
          payload: JSON.parse(savedFavorites),
        });
      }

      if (savedSlots) {
        dispatch({
          type: ACTION_TYPES.SET_SLOTS,
          payload: JSON.parse(savedSlots),
        });
      }

      if (savedSidebarState !== null) {
        dispatch({
          type: ACTION_TYPES.SET_SIDEBAR_COLLAPSED,
          payload: JSON.parse(savedSidebarState),
        });
      }

      if (savedSlotsExpanded !== null) {
        dispatch({
          type: ACTION_TYPES.SET_SLOTS_EXPANDED,
          payload: JSON.parse(savedSlotsExpanded),
        });
      }

      if (savedFavoritesExpanded !== null) {
        dispatch({
          type: ACTION_TYPES.SET_FAVORITES_EXPANDED,
          payload: JSON.parse(savedFavoritesExpanded),
        });
      }

      if (savedFullScreenMode !== null) {
        dispatch({
          type: ACTION_TYPES.SET_FULL_SCREEN_MODE,
          payload: JSON.parse(savedFullScreenMode),
        });
      }

      if (savedSidebarWidth !== null) {
        dispatch({
          type: ACTION_TYPES.SET_SIDEBAR_WIDTH,
          payload: JSON.parse(savedSidebarWidth),
        });
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
              dispatch({
                type: ACTION_TYPES.SET_SELECTED_COLORS,
                payload: newFormat,
              });
            } else {
              dispatch({
                type: ACTION_TYPES.SET_SELECTED_COLORS,
                payload: parsedColors,
              });
            }
          }
        } catch (error) {
          console.error("Error loading selected colors", error);
        }
      }
    };

    loadFromLocalStorage();
  }, []);

  // Persistir en localStorage cuando el estado cambia
  useEffect(() => {
    localStorage.setItem(
      "colorPaletteFavorites",
      JSON.stringify(state.favorites)
    );
  }, [state.favorites]);

  useEffect(() => {
    localStorage.setItem("colorPaletteSlots", JSON.stringify(state.slots));
  }, [state.slots]);

  useEffect(() => {
    localStorage.setItem(
      "colorPaletteSidebarState",
      JSON.stringify(state.sidebarCollapsed)
    );
  }, [state.sidebarCollapsed]);

  useEffect(() => {
    localStorage.setItem(
      "colorPaletteSlotsExpanded",
      JSON.stringify(state.slotsExpanded)
    );
  }, [state.slotsExpanded]);

  useEffect(() => {
    localStorage.setItem(
      "colorPaletteFavoritesExpanded",
      JSON.stringify(state.favoritesExpanded)
    );
  }, [state.favoritesExpanded]);

  useEffect(() => {
    localStorage.setItem(
      "colorPaletteFullScreenMode",
      JSON.stringify(state.fullScreenMode)
    );
  }, [state.fullScreenMode]);

  useEffect(() => {
    localStorage.setItem(
      "colorPaletteSelection",
      JSON.stringify(state.selectedColors)
    );
  }, [state.selectedColors]);

  useEffect(() => {
    localStorage.setItem(
      "colorPaletteSidebarWidth",
      JSON.stringify(state.sidebarWidth)
    );
  }, [state.sidebarWidth]);

  // Actualizar los colores filtrados cuando cambia el término de búsqueda
  useEffect(() => {
    if (!state.searchTerm) {
      dispatch({
        type: ACTION_TYPES.SET_FILTERED_COLORS,
        payload: allAlbaColors,
      });
      return;
    }

    const lowercasedSearchTerm = state.searchTerm.toLowerCase();
    const filtered = allAlbaColors.filter(
      (color) =>
        color.name.toLowerCase().includes(lowercasedSearchTerm) ||
        color.code.toLowerCase().includes(lowercasedSearchTerm) ||
        color.category?.toLowerCase().includes(lowercasedSearchTerm)
    );

    dispatch({ type: ACTION_TYPES.SET_FILTERED_COLORS, payload: filtered });
  }, [state.searchTerm]);

  // Método para verificar si un color está seleccionado
  const isColorSelected = (slotIndex, color) => {
    return state.selectedColors.some(
      (item) => item.slotIndex === slotIndex && item.color.code === color.code
    );
  };

  // Valores del contexto
  const value = {
    state,
    dispatch,
    ACTION_TYPES,
    isColorSelected,
  };

  return (
    <ColorPaletteContext.Provider value={value}>
      {children}
    </ColorPaletteContext.Provider>
  );
}

// Hook para acceder al contexto
export function useColorPaletteContext() {
  const context = useContext(ColorPaletteContext);
  if (context === undefined) {
    throw new Error(
      "useColorPaletteContext debe ser usado dentro de un ColorPaletteProvider"
    );
  }
  return context;
}
