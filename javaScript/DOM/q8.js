const customDropdown = document.getElementById("customDropdown");
const dropdownToggleBtn = document.getElementById("dropdownToggleBtn");
const dropdownOptions = document.getElementById("dropdownOptions");

dropdownToggleBtn.addEventListener("click", () => {
  dropdownOptions.classList.toggle("open");
});

dropdownOptions.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    dropdownToggleBtn.textContent = `${event.target.textContent} ▼`;
    dropdownOptions.classList.remove("open");
  }
});

document.addEventListener(
  "click",
  (event) => {
    if (!customDropdown.contains(event.target)) {
      dropdownOptions.classList.remove("open");
    }
  },
  true
);