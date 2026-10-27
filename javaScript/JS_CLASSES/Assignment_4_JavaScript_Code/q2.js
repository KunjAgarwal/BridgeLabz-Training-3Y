"use strict";

// Q2: Student Form Validator (Forms + RegExp)
// Run this file in a browser because it creates a form in the DOM.
class StudentFormValidator {
  constructor() {
    this.form = document.createElement("form");
    this.form.innerHTML = `
      <h2>Student Registration</h2>
      <label>Name <input name="name" type="text" required></label><br>
      <label>Email <input name="email" type="text" required></label><br>
      <label>Phone <input name="phone" type="text" required></label><br>
      <label>Password <input name="password" type="password" required></label><br>
      <button type="submit">Register</button>
      <p id="form-message" aria-live="polite"></p>
    `;
    document.body.appendChild(this.form);
    this.form.addEventListener("submit", event => {
      event.preventDefault();
      this.validate();
    });
  }

  validate() {
    const data = Object.fromEntries(new FormData(this.form).entries());
    const rules = [
      ["name", /^[A-Za-z]+$/, "Name must contain alphabets only."],
      ["email", /^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Enter a valid email address."],
      ["phone", /^\d{10}$/, "Phone must contain exactly 10 digits."],
      ["password", /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/, "Password needs an uppercase letter, a number, and a special character."]
    ];

    let firstInvalid = null;
    for (const [field, pattern, message] of rules) {
      const input = this.form.elements[field];
      const valid = pattern.test(data[field] || "");
      input.style.border = valid ? "2px solid green" : "2px solid red";
      input.setAttribute("aria-invalid", String(!valid));

      let error = input.parentElement.querySelector(".error-message");
      if (!error) {
        error = document.createElement("span");
        error.className = "error-message";
        error.style.color = "red";
        input.insertAdjacentElement("afterend", error);
      }
      error.textContent = valid ? "" : ` ${message}`;
      if (!valid && !firstInvalid) firstInvalid = input;
    }

    const message = this.form.querySelector("#form-message");
    message.style.color = firstInvalid ? "red" : "green";
    message.textContent = firstInvalid ? "Please correct the highlighted fields." : "Registration details are valid.";
    if (firstInvalid) firstInvalid.focus();
    console.log(message.textContent);
  }
}

new StudentFormValidator();
