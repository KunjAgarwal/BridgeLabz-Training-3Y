"use strict";

// Q6: Employee Management System (Classes + Object Methods)
class Employee {
  constructor(id, name, department, monthlySalary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.monthlySalary = Number(monthlySalary);
  }

  getAnnualSalary() {
    return this.monthlySalary * 12;
  }

  applyBonus(percent) {
    if (!Number.isFinite(percent) || percent < 0) {
      throw new RangeError("Bonus percentage must be a non-negative number.");
    }
    const bonus = this.getAnnualSalary() * percent / 100;
    return this.getAnnualSalary() + bonus;
  }
}

const employees = [
  new Employee(1, "Amit", "IT", 45000),
  new Employee(2, "Sara", "HR", 38000),
  new Employee(3, "Kiran", "Finance", 52000),
  new Employee(4, "Neha", "IT", 61000),
  new Employee(5, "Rahul", "Sales", 42000)
];

employees.forEach(employee => {
  console.log(
    `${employee.name} (${employee.department}) | Annual salary: ₹${employee.getAnnualSalary().toFixed(2)} | With 10% bonus: ₹${employee.applyBonus(10).toFixed(2)}`
  );
});

const totalAnnualPayout = employees.reduce(
  (total, employee) => total + employee.getAnnualSalary(),
  0
);
console.log("Total annual payout (before bonuses): ₹" + totalAnnualPayout.toFixed(2));
