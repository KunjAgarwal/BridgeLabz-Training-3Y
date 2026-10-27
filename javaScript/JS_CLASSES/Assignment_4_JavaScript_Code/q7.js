"use strict";

// Q7: Login Form Validation using RegExp
// Run in a browser to use the login form.
const loginForm = document.createElement("form");
loginForm.innerHTML = `
  <h2>Login</h2>
  <label>Username <input name="username" required></label><br>
  <label>Password <input name="password" type="password" required></label><br>
  <button type="submit">Login</button>
  <p id="login-message" aria-live="polite"></p>
`;
document.body.appendChild(loginForm);

loginForm.addEventListener("submit", event => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(loginForm).entries());

  const usernameValid = /^.{5,}$/.test(data.username);
  const passwordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/.test(data.password);

  const errors = [];
  if (!usernameValid) errors.push("Username must be at least 5 characters.");
  if (!passwordValid) errors.push("Password must be at least 8 characters and include lowercase, uppercase, number, and special character.");

  const message = loginForm.querySelector("#login-message");
  message.style.color = errors.length ? "red" : "green";
  message.textContent = errors.length ? errors.join(" ") : "Validation successful.";
  console.log(message.textContent);
});
