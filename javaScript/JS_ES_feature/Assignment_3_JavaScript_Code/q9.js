"use strict";

const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];

const clean = [];
const errors = [];

for (let index = 0; index < rawData.length; index++) {
  const lineNumber = index + 1;

  try {
    const record = JSON.parse(rawData[index]);

    if (record === null || typeof record !== "object" ||
        !Object.prototype.hasOwnProperty.call(record, "user") ||
        !Object.prototype.hasOwnProperty.call(record, "age")) {
      throw new Error("Missing required key: user or age");
    }
    if (typeof record.user !== "string" || record.user.trim() === "") {
      throw new Error("Invalid user value");
    }

    const age = Number(record.age);
    if (!Number.isFinite(age) || age < 0) {
      throw new Error("Invalid age value");
    }

    const normalized = { user: record.user, age };
    if (age >= 18) {
      clean.push(normalized);
    } else {
      console.log(`Line ${lineNumber}: valid JSON, under 18; filtered out.`);
    }
  } catch (error) {
    errors.push({ line: lineNumber, message: error.message });
    console.log(`Line ${lineNumber} error: ${error.message}`);
    // The loop continues with the next record after catch finishes.
  }
}

console.log("Clean adult records:", clean);
console.log("Audit errors:", errors);
