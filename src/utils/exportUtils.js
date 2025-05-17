/**
 * Función para exportar los datos de una combinación de colores
 * @param {Object} combination - Objeto de combinación completo
 */
export const exportCombination = (combination) => {
  // Preparar los datos para exportar
  const exportData = {
    name: combination.name,
    selectedColors: combination.selectedColors.map((item) => ({
      name: item.color.name,
      code: item.color.code,
      hex: item.color.hex,
      rgb: item.color.rgb,
      page: item.color.page,
      section: item.color.section,
    })),
    slots: combination.slots.map((slot) => ({
      name: slot.name,
      colors: slot.colors.map((color) => ({
        name: color.name,
        code: color.code,
        hex: color.hex,
        rgb: color.rgb,
        page: color.page,
        section: color.section,
      })),
    })),
    exportDate: new Date().toISOString(),
    version: "1.0",
  };

  // Convertir a JSON con formato legible
  const dataStr = JSON.stringify(exportData, null, 2);

  // Crear un URI de datos para la descarga
  const dataUri =
    "data:application/json;charset=utf-8," + encodeURIComponent(dataStr);

  // Nombre para el archivo basado en el nombre de la combinación
  const safeName = combination.name.replace(/[^a-z0-9]/gi, "-").toLowerCase();
  const exportFileDefaultName = `combinacion-${safeName}.json`;

  // Crear un elemento de enlace temporal para la descarga
  const linkElement = document.createElement("a");
  linkElement.setAttribute("href", dataUri);
  linkElement.setAttribute("download", exportFileDefaultName);
  linkElement.click();
  linkElement.remove();
};

/**
 * Función para exportar todas las combinaciones
 * @param {Array} combinations - Array de todas las combinaciones
 */
export const exportAllCombinations = (combinations) => {
  const exportData = {
    combinations: combinations.map((combination) => ({
      name: combination.name,
      selectedColors: combination.selectedColors.map((item) => ({
        name: item.color.name,
        code: item.color.code,
        hex: item.color.hex,
        rgb: item.color.rgb,
        page: item.color.page,
        section: item.color.section,
      })),
      slots: combination.slots.map((slot) => ({
        name: slot.name,
        colors: slot.colors.map((color) => ({
          name: color.name,
          code: color.code,
          hex: color.hex,
          rgb: color.rgb,
          page: color.page,
          section: color.section,
        })),
      })),
    })),
    exportDate: new Date().toISOString(),
    version: "1.0",
  };

  // Convertir a JSON con formato legible
  const dataStr = JSON.stringify(exportData, null, 2);

  // Crear un URI de datos para la descarga
  const dataUri =
    "data:application/json;charset=utf-8," + encodeURIComponent(dataStr);

  // Nombre para el archivo
  const exportFileDefaultName = "todas-las-combinaciones.json";

  // Crear un elemento de enlace temporal para la descarga
  const linkElement = document.createElement("a");
  linkElement.setAttribute("href", dataUri);
  linkElement.setAttribute("download", exportFileDefaultName);
  linkElement.click();
  linkElement.remove();
};

/**
 * Función para importar una combinación desde un archivo JSON
 * @param {Function} onSuccess - Callback con los datos importados
 * @param {Function} onError - Callback en caso de error
 */
export const importCombination = (onSuccess, onError) => {
  // Crear un input de archivo oculto
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".json";
  input.style.display = "none";

  input.addEventListener("change", async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    try {
      const text = await file.text();
      const data = JSON.parse(text);

      // Validar el formato de los datos
      if (data.version && data.selectedColors && data.slots) {
        // Formato de combinación individual
        const combination = {
          id: Date.now(),
          name: data.name || "Combinación Importada",
          slots: data.slots || [],
          selectedSlotIndex: null,
          selectedColors: data.selectedColors || [],
        };
        onSuccess([combination]);
      } else if (data.combinations && Array.isArray(data.combinations)) {
        // Formato de múltiples combinaciones
        const combinations = data.combinations.map((combo, index) => ({
          id: Date.now() + index,
          name: combo.name || `Combinación Importada ${index + 1}`,
          slots: combo.slots || [],
          selectedSlotIndex: null,
          selectedColors: combo.selectedColors || [],
        }));
        onSuccess(combinations);
      } else {
        // Intentar compatibilidad con formato anterior
        if (data.length && data[0] && data[0].color) {
          // Formato anterior de selectedColors
          const combination = {
            id: Date.now(),
            name: "Combinación Importada",
            slots: [],
            selectedSlotIndex: null,
            selectedColors: data,
          };
          onSuccess([combination]);
        } else {
          throw new Error("Formato de archivo no reconocido");
        }
      }
    } catch (error) {
      console.error("Error al importar:", error);
      onError(error.message || "Error al procesar el archivo");
    }

    // Limpiar el input
    document.body.removeChild(input);
  });

  // Añadir al DOM y hacer click
  document.body.appendChild(input);
  input.click();
};

/**
 * Función legacy para mantener compatibilidad
 * @param {Array} colors - Array de colores seleccionados en formato anterior
 */
export const exportColorData = (colors) => {
  // Convertir al nuevo formato
  const combination = {
    name: "Mi Combinación",
    selectedColors: colors,
    slots: [],
  };
  exportCombination(combination);
};
