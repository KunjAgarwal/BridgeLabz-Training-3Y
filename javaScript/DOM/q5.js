const galleryGrid = document.getElementById("galleryGrid");
const modalOverlay = document.getElementById("modalOverlay");
const modalContent = document.getElementById("modalContent");
const modalImage = document.getElementById("modalImage");
const modalCaption = document.getElementById("modalCaption");

galleryGrid.addEventListener("click", (event) => {
  if (event.target.tagName === "IMG") {
    modalImage.src = event.target.src;
    modalCaption.textContent = event.target.alt;
    modalOverlay.classList.add("open");
  }
});

modalContent.addEventListener("click", (event) => {
  event.stopPropagation();
});

modalOverlay.addEventListener("click", () => {
  modalOverlay.classList.remove("open");
});