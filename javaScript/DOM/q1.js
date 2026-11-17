const productInput = document.getElementById("productInput");
const addProductBtn = document.getElementById("addProductBtn");
const productList = document.getElementById("productList");

let activeEditSpan = null; 
function addProduct(name) {
  const trimmedName = name.trim();
  if (!trimmedName) return;

  const listItem = document.createElement("li");
  listItem.innerHTML = `
    <span class="product-text">${trimmedName}</span>
    <div class="actions">
      <button class="edit-btn">Edit</button>
      <button class="delete-btn">Delete</button>
    </div>
  `;

  productList.appendChild(listItem);
  productInput.value = "";
}

function saveActiveEdit() {
  if (!activeEditSpan) return;

  const updatedText = activeEditSpan.textContent.trim();
  activeEditSpan.textContent = updatedText || activeEditSpan.dataset.originalText;
  activeEditSpan.removeAttribute("contenteditable");

  const editButton = activeEditSpan.closest("li").querySelector(".edit-btn");
  if (editButton) editButton.textContent = "Edit";

  activeEditSpan = null;
}

addProductBtn.addEventListener("click", () => addProduct(productInput.value));
productInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addProduct(productInput.value);
});

productList.addEventListener("click", (event) => {
  const target = event.target;
  const listItem = target.closest("li");
  if (!listItem) return;

  if (target.classList.contains("delete-btn")) {
    if (activeEditSpan && listItem.contains(activeEditSpan)) {
      activeEditSpan = null;
    }
    listItem.remove();
  }

  if (target.classList.contains("edit-btn")) {
    const textSpan = listItem.querySelector(".product-text");

    if (activeEditSpan && activeEditSpan !== textSpan) {
      saveActiveEdit();
    }

    if (textSpan.getAttribute("contenteditable") === "true") {
      saveActiveEdit();
    } else {
      textSpan.dataset.originalText = textSpan.textContent;
      textSpan.setAttribute("contenteditable", "true");
      textSpan.focus();
      target.textContent = "Save";
      activeEditSpan = textSpan;
    }
  }
});

document.addEventListener("click", (event) => {
  if (!activeEditSpan) return;

  const activeListItem = activeEditSpan.closest("li");
  if (!activeListItem.contains(event.target)) {
    saveActiveEdit();
  }
});