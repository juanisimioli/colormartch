const colors = [];

document.querySelectorAll(".m7-color-card").forEach((el) => {
  const label = el.getAttribute("data-label") || ""; // Evita null
  const hex = el.getAttribute("data-hex");
  const styleColor = el.style.color;

  let name = label;
  let code = "";

  // Solo si tiene " - "
  if (label.includes(" - ")) {
    [name, code] = label.split(" - ");
  }

  colors.push({
    name: name.trim(),
    code: code.trim(),
    hex: hex,
    rgb: hexToRgb(hex),
    label: styleColor,
  });
});

function hexToRgb(hex) {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgb(${r}, ${g}, ${b})`;
}

console.log(colors);
