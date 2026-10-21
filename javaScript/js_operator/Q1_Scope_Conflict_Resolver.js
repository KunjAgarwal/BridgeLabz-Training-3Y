let bonus = 5000;
function calculateSalary(isPermanent) {
    let salary = 40000;
    let totalSalary = salary;
    if (isPermanent === true) {
        totalSalary += bonus;
    }
    console.log(`Permanent employee: ${isPermanent}`);
    console.log(`Base salary: ₹${salary}`);
    console.log(`Global bonus: ₹${bonus}`);
    console.log(`Total salary: ₹${totalSalary}`);
}
calculateSalary(true);
calculateSalary(false);
console.log(`Global bonus after both calls: ₹${bonus}`);