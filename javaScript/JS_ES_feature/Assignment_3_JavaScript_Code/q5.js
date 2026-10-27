"use strict";

// Corrected version: initialize variables before using them.
const score = 50;
const status = "ready";

function announce() {
  console.log("Game started");
}

function startGame() {
  console.log(`Status: ${status}`);
  console.log(`Score: ${score}`);
}

console.log(score);
announce();
startGame();

// Arrow functions assigned to const are not callable before initialization:
// const announceArrow = () => console.log("Game started");
// announceArrow();
