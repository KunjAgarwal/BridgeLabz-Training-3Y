class Person {
    constructor(name) {
        this.name = name;
    }

    printName() {
        console.log(`Name: ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, branch) {
        super(name);
        this.branch = branch;
    }

    printBranch() {
        console.log(`Branch: ${this.branch}`);
    }
}

const studentES6 = new Student("Kunj", "Computer Science");
studentES6.printBranch();
studentES6.printName();   
console.log(
    "Uses prototype chain under the hood?",
    Object.getPrototypeOf(Student.prototype) === Person.prototype
);