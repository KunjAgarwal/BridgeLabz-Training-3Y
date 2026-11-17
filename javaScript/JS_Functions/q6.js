function Person(name) {
    this.name = name;
}
Person.prototype.introduce = function () {
    console.log(`Hi, I am ${this.name}.`);
};

function Faculty(name, department) {
    Person.call(this, name);
    this.department = department;
}
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.teach = function () {
    console.log(`${this.name} teaches in the ${this.department} department.`);
};

function Professor(name, department, researchArea) {
    Faculty.call(this, name, department);
    this.researchArea = researchArea;
}
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.publishPaper = function () {
    console.log(`Prof. ${this.name} is researching ${this.researchArea}.`);
};

const prof = new Professor("Dr. Sharma", "CSE", "Artificial Intelligence");

prof.publishPaper(); 
prof.teach();       
prof.introduce();   