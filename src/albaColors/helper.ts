import {
  blanco,
  rojo,
  naranja,
  dorado,
  amarillo,
  lima,
  verde,
  turquesa,
  azul,
  violeta,
  neutrosFrios,
  neutrosCalidos,
} from "./colors";

type NameColor = {
  name: string;
  code: string;
};

type DigitalColor = {
  label: string;
  hex: string;
  rgb: string;
};

type LocationColor = {
  page: number;
  section: number;
};

// TODO: cuando termine ingreso de colores, sacar el Partial en color location
export type AlbaColor = NameColor & DigitalColor & Partial<LocationColor>;

export type AlbaColorOnlyTaco = NameColor & LocationColor;

type GroupColor = {
  name: string;
  colors: AlbaColor[];
};

// Creamos un único arreglo con todos los colores categorizados
const allColorCategories: GroupColor[] = [
  { name: "Blanco", colors: blanco },
  { name: "Rojo", colors: rojo },
  { name: "Naranja", colors: naranja },
  { name: "Dorado", colors: dorado },
  { name: "Amarillo", colors: amarillo },
  { name: "Lima", colors: lima },
  { name: "Verde", colors: verde },
  { name: "Turquesa", colors: turquesa },
  { name: "Azul", colors: azul },
  { name: "Violeta", colors: violeta },
  { name: "Neutros Fríos", colors: neutrosFrios },
  { name: "Neutros Cálidos", colors: neutrosCalidos },
];

// Crear un único array con todos los colores
export const allAlbaColors: AlbaColor[] = allColorCategories.flatMap(
  (category) =>
    category.colors.map((color) => ({
      ...color,
      category: category.name,
    }))
);
