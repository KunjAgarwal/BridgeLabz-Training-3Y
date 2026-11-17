const steps = document.querySelectorAll(".step");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");
const navControls = document.getElementById("navControls");
const summaryBox = document.getElementById("summaryBox");

const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");

let currentStep = 0;

function validateStep(stepIndex) {
  const errorEl = document.getElementById(`error-${stepIndex}`);
  errorEl.textContent = "";

  if (stepIndex === 0) {
    if (nameInput.value.trim().length < 2) {
      errorEl.textContent = "Please enter a valid name (at least 2 characters).";
      return false;
    }
  } else if (stepIndex === 1) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
      errorEl.textContent = "Please enter a valid email address.";
      return false;
    }
  } else if (stepIndex === 2) {
    if (passwordInput.value.length < 6) {
      errorEl.textContent = "Password must be at least 6 characters long.";
      return false;
    }
  }

  return true;
}

function renderStep() {
  steps.forEach((step, index) => {
    step.classList.toggle("active", index === currentStep);
  });

  backBtn.disabled = currentStep === 0;
  nextBtn.textContent = currentStep === steps.length - 1 ? "Submit" : "Next";
}

nextBtn.addEventListener("click", () => {
  if (!validateStep(currentStep)) return;

  if (currentStep < steps.length - 1) {
    currentStep++;
    renderStep();
  } else {
    steps[currentStep].classList.remove("active");
    navControls.style.display = "none";
    summaryBox.style.display = "block";
    summaryBox.innerHTML = `
      <h3>Registration Summary</h3>
      <p><strong>Name:</strong> ${nameInput.value.trim()}</p>
      <p><strong>Email:</strong> ${emailInput.value.trim()}</p>
      <p><strong>Password:</strong> ${"*".repeat(passwordInput.value.length)}</p>
    `;
  }
});

backBtn.addEventListener("click", () => {
  if (currentStep > 0) {
    currentStep--;
    renderStep();
  }
});