function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

Car.prototype.getDetails = function () {
    console.log(`Car Details: ${this.brand} ${this.model}`);
};

const car1 = new Car("Toyota", "Camry");
const car2 = new Car("Honda", "Civic");

car1.getDetails();
car2.getDetails();

console.log("Is getDetails shared?", car1.getDetails === car2.getDetails); 