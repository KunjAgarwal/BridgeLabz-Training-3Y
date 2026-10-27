"use strict";

// `delete total` is illegal for a local variable binding.
// Correct ES6 version:
function demo(a, b) {
  let total = a + b;
  console.log("Total:", total);
  total = 0; // Reassign to clear the value.
  console.log("Cleared total:", total);
}

demo(5, 10);

// `delete` can remove a configurable object property:
const record = { total: 15 };
delete record.total;
console.log("After deleting object property:", record);
