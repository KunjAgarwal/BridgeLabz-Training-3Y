"use strict";

// Q8: Dynamic Object Updater
const user = { name: "John", email: "john@mail.com", age: 21 };

const userForm = document.createElement("form");
userForm.innerHTML = `
  <h2>Edit User</h2>
  <label>Name <input name="name" required></label><br>
  <label>Email <input name="email" type="email" required></label><br>
  <label>Age <input name="age" type="number" min="0" required></label><br>
  <button type="submit">Update User</button>
`;
document.body.appendChild(userForm);

const userOutput = document.createElement("pre");
document.body.appendChild(userOutput);

function renderUser() {
  userOutput.textContent = JSON.stringify(user, null, 2);
  console.log("Current user object:", { ...user });
}

userForm.elements.name.value = user.name;
userForm.elements.email.value = user.email;
userForm.elements.age.value = user.age;
renderUser();

userForm.addEventListener("submit", event => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(userForm).entries());

  // Update the same object so references to `user` see the latest values.
  user.name = data.name.trim();
  user.email = data.email.trim();
  user.age = Number(data.age);

  renderUser();
});
