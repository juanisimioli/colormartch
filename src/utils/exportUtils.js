/**
 * Función para exportar los datos de una combinación de colores
 * @param {Array} colors - Array de objetos de color seleccionados
 */
export const exportColorData = (colors) => {
  // Extraer solo la información relevante de los colores
  const colorData = colors.map((color) => ({
    name: color.color.name,
    code: color.color.code,
    hex: color.color.hex,
    rgb: color.color.rgb,
  }));

  // Convertir a JSON con formato legible
  const dataStr = JSON.stringify(colorData, null, 2);

  // Crear un URI de datos para la descarga
  const dataUri =
    "data:application/json;charset=utf-8," + encodeURIComponent(dataStr);

  // Nombre predeterminado para el archivo
  const exportFileDefaultName = "mi-combinacion-colores.json";

  // Crear un elemento de enlace temporal para la descarga
  const linkElement = document.createElement("a");
  linkElement.setAttribute("href", dataUri);
  linkElement.setAttribute("download", exportFileDefaultName);
  linkElement.click();
  linkElement.remove();
};
