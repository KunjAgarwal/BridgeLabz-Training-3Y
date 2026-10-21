const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

let subtotal = 0;
let categoryDiscountTotal = 0;

for (const product of cart) {
    let discountRate = 0;

    if (product.category === "electronics") {
        discountRate = 0.10;
    } else if (product.category === "fashion") {
        discountRate = 0.05;
    }

    const itemDiscount = product.price * discountRate;
    subtotal += product.price;
    categoryDiscountTotal += itemDiscount;

    console.log(
        `${product.item}: ₹${product.price.toFixed(2)}; ` +
        `category discount: ${(discountRate * 100).toFixed(0)}% ` +
        `(₹${itemDiscount.toFixed(2)})`
    );
}

const afterCategoryDiscounts = subtotal - categoryDiscountTotal;

const extraDiscount = subtotal > 50000 ? afterCategoryDiscounts * 0.05 : 0;
const finalTotal = afterCategoryDiscounts - extraDiscount;

const verifiedSubtotal = cart.reduce((sum, product) => sum + product.price, 0);

console.log(`Original cart total: ₹${verifiedSubtotal.toFixed(2)}`);
console.log(`Category discounts: ₹${categoryDiscountTotal.toFixed(2)}`);
console.log(`Extra overall discount: ₹${extraDiscount.toFixed(2)}`);
console.log(`Final total: ₹${finalTotal.toFixed(2)}`);
