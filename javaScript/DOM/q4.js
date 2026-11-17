const themeControls = document.getElementById("themeControls");
const activeThemeLabel = document.getElementById("activeThemeLabel");

function applyTheme(themeName) {
  document.body.setAttribute("class", `theme-${themeName}`);
  document.body.setAttribute("data-theme", themeName);
  activeThemeLabel.textContent = document.body.getAttribute("data-theme");
}

themeControls.addEventListener("click", (event) => {
  const selectedTheme = event.target.getAttribute("data-select-theme");
  if (selectedTheme) {
    applyTheme(selectedTheme);
  }
});