"use strict";

// Run in Node.js: node q6.js 5
// In a browser, replace the next line with:
// let rows = Number(prompt("Number of rows (default 5):") || 5);
let rows = Number(process.argv[2] ?? 5);

if (!Number.isInteger(rows) || rows < 1 || rows > 50) {
  console.log("Please provide a whole number from 1 to 50.");
} else {
  for (let i = 1; i <= rows; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += "* ";
    }
    console.log(line.trimEnd());
  }
}

// Debug tip: set a breakpoint inside the inner loop and watch i, j, line.
// `let` is block-scoped; `var` is function-scoped. The output here is the same
// if you replace these loop declarations with var, but scope behavior differs.
