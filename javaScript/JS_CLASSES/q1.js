"use strict";

// Q1: E-Commerce Product Manager (Classes + Objects)
class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = Number(price);
    this.category = category;
  }

  
  applyDiscount(percent) {
    if (!Number.isFinite(percent) || percent < 0 || percent > 100) {
      throw new RangeError("Discount must be between 0 and 100.");
    }
    this.price -= this.price * (percent / 100);
    return this.price;
  }

  getDetails() {
    return `${this.name} (ID: ${this.id}) | Category: ${this.category} | Price: ₹${this.price.toFixed(2)}`;
  }
}

const products = [
  new Product(1, "Keyboard", 1500, "Electronics"),
  new Product(2, "Notebook", 120, "Stationery"),
  new Product(3, "Headphones", 2400, "Electronics"),
  new Product(4, "Bottle", 850, "Accessories")
];

products[0].applyDiscount(10);

console.log("All products:");
products.forEach(product => console.log(product.getDetails()));

console.log("\nProducts priced above ₹1000:");
products
  .filter(product => product.price > 1000)
  .forEach(product => console.log(product.getDetails()));
