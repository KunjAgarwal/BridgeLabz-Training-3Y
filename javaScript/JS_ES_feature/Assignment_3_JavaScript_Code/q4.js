"use strict";

// Fix: declare greeting instead of assigning to an undeclared identifier.
function showMessage() {
  const greeting = "Welcome";
  console.log(greeting);
}

showMessage();

// Debugging tip: add `greeting` to Watch and inspect the call stack
// while stepping through showMessage().
