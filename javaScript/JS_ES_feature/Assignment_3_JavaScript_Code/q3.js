"use strict";

const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null
];

const valid = [];
const invalid = [];

for (let index = 0; index < transactions.length; index++) {
  try {
    const transaction = transactions[index];

    if (transaction === null || transaction === undefined) {
      throw new TypeError("NULL_ENTRY");
    }
    if (transaction.id == null || transaction.amount == null) {
      throw new Error("MISSING_FIELD");
    }
    if (typeof transaction.amount !== "number" ||
        !Number.isFinite(transaction.amount)) {
      throw new TypeError("INVALID_AMOUNT_TYPE");
    }
    if (transaction.amount < 0) {
      throw new RangeError("NEGATIVE_AMOUNT");
    }

    valid.push(transaction);
    console.log(`Transaction ${transaction.id}: VALID`);
  } catch (error) {
    invalid.push({
      index,
      transaction: transactions[index],
      errorType: error.message,
      message: error.message
    });
    console.log(`Transaction at index ${index}: INVALID (${error.message})`);
    // Debugging: set a breakpoint here and watch index, error, valid, invalid.
  }
}

console.log("Valid transactions:", valid);
console.log("Invalid transactions:", invalid);
console.log(`Successful: ${valid.length}; Failed: ${invalid.length}`);
