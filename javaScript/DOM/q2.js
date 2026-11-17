const MAX_CHARS = 100;
const messageBox = document.getElementById("messageBox");
const charCounter = document.getElementById("charCounter");
const resetBtn = document.getElementById("resetBtn");

function updateCounter() {
  const remaining = MAX_CHARS - messageBox.value.length;
  charCounter.textContent = `${remaining} characters remaining`;

  charCounter.classList.remove("warning", "danger");

  if (remaining === 0) {
    charCounter.classList.add("danger");
  } else if (remaining <= 20) {
    charCounter.classList.add("warning");
  }
}

messageBox.addEventListener("keydown", (event) => {
  const allowedControlKeys = [
    "Backspace", "Delete", "ArrowLeft", "ArrowRight",
    "ArrowUp", "ArrowDown", "Tab", "Home", "End"
  ];

  const isShortcut = event.ctrlKey || event.metaKey;
  const hasSelection = messageBox.selectionStart !== messageBox.selectionEnd;

  if (
    messageBox.value.length >= MAX_CHARS &&
    !allowedControlKeys.includes(event.key) &&
    !isShortcut &&
    !hasSelection
  ) {
    event.preventDefault();
  }
});

messageBox.addEventListener("input", () => {
  if (messageBox.value.length > MAX_CHARS) {
    messageBox.value = messageBox.value.slice(0, MAX_CHARS);
  }
  updateCounter();
});

resetBtn.addEventListener("click", () => {
  messageBox.value = "";
  updateCounter();
  messageBox.focus();
});