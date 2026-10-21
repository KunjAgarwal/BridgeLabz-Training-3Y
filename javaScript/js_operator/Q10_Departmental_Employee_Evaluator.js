const departments = [
    ["HR", 72],
    ["Finance", 88],
    ["Tech", 95],
    ["Support", 63]
];

for (const department of departments) {
    const departmentName = department[0];
    const performanceScore = department[1];
    let performanceLabel;

    if (performanceScore >= 90) {
        performanceLabel = "Excellent";
    } else if (performanceScore >= 75) {
        performanceLabel = "Good";
    } else if (performanceScore >= 60) {
        performanceLabel = "Average";
    } else {
        performanceLabel = "Needs Improvement";
    }

    console.log(`${departmentName}: ${performanceScore} — ${performanceLabel}`);
}
