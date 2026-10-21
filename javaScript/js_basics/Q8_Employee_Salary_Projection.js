let currentSalary = 50000;
const annualIncrementRate = 8; // Percentage increase per year
console.log(`Starting annual salary: ₹${currentSalary.toFixed(2)}`);
for (let year = 1; year <= 5; year++) {
    currentSalary = Math.round(currentSalary * (1 + annualIncrementRate / 100));
    console.log(`Year ${year}: ₹${currentSalary.toFixed(2)}`);
}
