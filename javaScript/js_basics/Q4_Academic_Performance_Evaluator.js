const marks = [88, 76, 91, 67, 82]; // Marks in five subjects, each out of 100
const maximumMarksPerSubject = 100;
const minimumPassingMark = 35;
const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
const averageMarks = totalMarks / marks.length;
const overallPercentage = (totalMarks / (marks.length * maximumMarksPerSubject)) * 100;
const hasFailedSubject = marks.some(mark => mark < minimumPassingMark);
let result;
if (hasFailedSubject || overallPercentage < 50) {
    result = "Detained";
} else if (overallPercentage >= 85) {
    result = "Promoted with Distinction";
} else {
    result = "Promoted";
}
console.log(`Marks: ${marks.join(", ")}`);
console.log(`Average marks: ${averageMarks.toFixed(2)}`);
console.log(`Overall percentage: ${overallPercentage.toFixed(2)}%`);
console.log(`Result: ${result}`);