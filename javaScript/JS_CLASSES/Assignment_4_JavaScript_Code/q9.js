"use strict";

// Q9: Shopping Cart Total (Classes + RegExp for Coupon)
class Cart {
  constructor() {
    this.items = [];
  }

  addItem(name, price, quantity) {
    if (!name || !Number.isFinite(price) || price < 0 ||
        !Number.isInteger(quantity) || quantity < 1) {
      throw new TypeError("Provide a name, non-negative price, and positive whole-number quantity.");
    }
    this.items.push({ name, price, quantity });
  }

  getTotal() {
    return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  applyCoupon(code) {
    // SAVE20 means 20% off; DISC10 means 10% off.
    const match = /^(SAVE|DISC)(20|10)$/.exec(code);
    if (!match) {
      throw new Error("Invalid coupon. Use SAVE20, SAVE10, DISC20, or DISC10.");
    }
    return Number(match[2]);
  }
}

const cart = new Cart();
cart.addItem("T-shirt", 500, 2);
cart.addItem("Shoes", 1800, 1);

try {
  const subtotal = cart.getTotal();
  const coupon = "SAVE20";
  const discountPercent = cart.applyCoupon(coupon);
  const finalTotal = subtotal * (1 - discountPercent / 100);

  console.log("Cart items:", cart.items);
  console.log(`Subtotal: ₹${subtotal.toFixed(2)}`);
  console.log(`Coupon: ${coupon} (${discountPercent}% off)`);
  console.log(`Final total: ₹${finalTotal.toFixed(2)}`);
} catch (error) {
  console.log("Cart error:", error.message);
}
