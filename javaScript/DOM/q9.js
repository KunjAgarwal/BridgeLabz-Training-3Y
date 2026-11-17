const signupForm = document.getElementById("signupForm");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const userPassword = document.getElementById("userPassword");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const successBanner = document.getElementById("successBanner");

function validateName() {
  if (userName.value.trim() === "") {
    nameError.textContent = "Name is required.";
    return false;
  }
  nameError.textContent = "";
  return true;
}

function validateEmail() {
  const emailVal = userEmail.value.trim();
  if (emailVal === "" || !emailVal.includes("@")) {
    emailError.textContent = "A valid email containing '@' is required.";
    return false;
  }
  emailError.textContent = "";
  return true;
}

function validatePassword() {
  if (userPassword.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    return false;
  }
  passwordError.textContent = "";
  return true;
}

userName.addEventListener("input", () => {
  if (nameError.textContent) validateName();
});

userEmail.addEventListener("input", () => {
  if (emailError.textContent) validateEmail();
});

userPassword.addEventListener("input", () => {
  if (passwordError.textContent) validatePassword();
});

signupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  successBanner.style.display = "none";

  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();

  if (isNameValid && isEmailValid && isPasswordValid) {
    successBanner.style.display = "block";
    signupForm.reset();
  }
});