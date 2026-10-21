const expenses = [2500, 1800, 6000, 1200, 900]; // Food, travel, rent, bills, leisure
let totalExpense = 0;
for (const expense of expenses) {
    totalExpense += expense;
}
const averageExpense = totalExpense / expenses.length;
const taxRate = 0.10;
const finalAmount = totalExpense * (1 + taxRate);
console.log(`Total expense: ₹${totalExpense.toFixed(2)}`);
console.log(`Average expense: ₹${averageExpense.toFixed(2)}`);
console.log(`Final amount after 10% tax: ₹${finalAmount.toFixed(2)}`);
