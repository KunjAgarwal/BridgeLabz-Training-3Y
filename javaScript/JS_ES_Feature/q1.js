"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];
const validNumbers = [];
const invalidNumbers = [];

for (let i = 0; i < apiData.length; i++) {
  const value = apiData[i];
  const numberValue = Number(value);
  const booleanValue = Boolean(value);
  const stringValue = String(value);

  // Reject whitespace-only strings even though Number(" ") is 0.
  const isBlank = typeof value === "string" && value.trim() === "";
  const isValidNumber = !isBlank && Number.isFinite(numberValue);

  console.log(`Index ${i}:`);
  console.log(`  Original: ${stringValue}`);
  console.log(`  Number: ${numberValue}`);
  console.log(`  Boolean: ${booleanValue}`);
  console.log(`  String: "${stringValue}"`);

  if (isValidNumber) {
    validNumbers.push(numberValue);
    console.log("  Status: VALID numeric data");
  } else {
    invalidNumbers.push(value);
    console.log("  Status: INVALID numeric data");
  }
}

console.log("\nValid numeric data:", validNumbers);
console.log("Invalid numeric data:", invalidNumbers);
console.log("Valid count:", validNumbers.length);
console.log("Invalid count:", invalidNumbers.length);
