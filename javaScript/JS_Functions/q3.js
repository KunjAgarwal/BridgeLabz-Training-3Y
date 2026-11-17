const userWithArrow = {
    name: "Kunj",
    showName: () => {
        console.log("Arrow function output:", this.name);
    }
};

userWithArrow.showName();
const userWithNormalFunction = {
    name: "Kunj",
    showName: function () {
        console.log("Normal function output:", this.name);
    }
};

userWithNormalFunction.showName();