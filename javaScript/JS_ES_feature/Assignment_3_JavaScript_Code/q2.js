"use strict";

const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" }
];

try {
  for (const employee of employees) {
    if (!employee || employee.name == null ||
        employee.salary == null || employee.years == null) {
      throw new Error("Employee has a missing required property.");
    }

    const salary = Number(employee.salary);
    const years = Number(employee.years);

    if (!Number.isFinite(salary) || salary < 0 ||
        !Number.isFinite(years) || years < 0) {
      throw new Error(`Invalid salary or years for ${employee.name}.`);
    }

    const rate = years > 3 ? 0.10 : 0.05;
    const bonus = salary * rate;
    const totalPay = salary + bonus;

    console.log(
      `${employee.name}: Salary ₹${salary.toFixed(2)}, ` +
      `Experience ${years} years, Bonus ₹${bonus.toFixed(2)}, ` +
      `Total ₹${totalPay.toFixed(2)}`
    );
  }
} catch (error) {
  console.log("Employee calculation error:", error.message);
}
