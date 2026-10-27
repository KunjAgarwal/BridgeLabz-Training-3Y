"use strict";

class InvalidOperationError extends Error {
  constructor(operation) {
    super(`Operation not recognized: ${operation}`);
    this.name = "InvalidOperationError";
  }
}

function calculate(operation, num1, num2 = 0) {
  switch (operation) {
    case "add": return num1 + num2;
    case "subtract": return num1 - num2;
    case "divide":
      if (num2 === 0) throw new RangeError("Cannot divide by zero.");
      return num1 / num2;
    case "power": return num1 ** num2;
    case "root":
      if (num1 < 0) {
        throw new RangeError("Cannot take the real square root of a negative number.");
      }
      return Math.sqrt(num1);
    default:
      throw new InvalidOperationError(operation);
  }
}

const operations = ["add", "divide", "power", "root", "subtract", "mod"];
const num1 = 25;
const num2 = 0;

for (const operation of operations) {
  try {
    console.log(`${operation}: ${calculate(operation, num1, num2)}`);
  } catch (error) {
    console.log(`${operation}: ERROR - ${error.name}: ${error.message}`);
  }
}
