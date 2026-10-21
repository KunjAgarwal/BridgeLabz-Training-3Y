const originalTotal = 7500;
let discountPercentage;
if (originalTotal >= 10000) {
    discountPercentage = 25;
} else if (originalTotal >= 5000) {
    discountPercentage = 15;
} else if (originalTotal >= 2000) {
    discountPercentage = 5;
} else {
    discountPercentage = 0;
}
const discountAmount = Math.round(originalTotal * discountPercentage / 100);
const finalPrice = Math.round(originalTotal - discountAmount);
console.log(`Original total: ₹${originalTotal.toFixed(2)}`);
console.log(`Discount: ${discountPercentage}%`);
console.log(`Discount amount: ₹${discountAmount.toFixed(2)}`);
console.log(`Final price after discount: ₹${finalPrice.toFixed(2)}`);