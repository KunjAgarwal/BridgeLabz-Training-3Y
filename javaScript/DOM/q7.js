const trackingBox = document.getElementById("trackingBox");
const coordsDisplay = document.getElementById("coordsDisplay");

trackingBox.addEventListener("mousemove", (event) => {
  coordsDisplay.textContent = `Live Coordinates -> clientX: ${event.clientX}, clientY: ${event.clientY}`;
});

trackingBox.addEventListener("dblclick", (event) => {
  const boxRect = trackingBox.getBoundingClientRect();
  const offsetX = event.clientX - boxRect.left;
  const offsetY = event.clientY - boxRect.top;

  const dot = document.createElement("span");
  dot.classList.add("red-dot");
  dot.style.left = `${offsetX}px`;
  dot.style.top = `${offsetY}px`;

  trackingBox.appendChild(dot);
});