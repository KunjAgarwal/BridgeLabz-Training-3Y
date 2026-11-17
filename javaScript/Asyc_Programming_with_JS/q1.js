const getRandomDelay = () => Math.floor(Math.random() * 1000) + 1000;

const boilWater = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject("Error: Kettle malfunctioned while boiling water.");
            } else {
                console.log("Step 1: Water boiled.");
                resolve();
            }
        }, getRandomDelay());
    });
};

const brewCoffee = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject("Error: Ran out of coffee beans!");
            } else {
                console.log("Step 2: Coffee brewed.");
                resolve();
            }
        }, getRandomDelay());
    });
};

const pourIntoCup = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject("Error: Spilled coffee while pouring!");
            } else {
                console.log("Step 3: Coffee poured into cup.");
                resolve();
            }
        }, getRandomDelay());
    });
};

console.log("Starting coffee machine...");
boilWater()
    .then(() => brewCoffee())
    .then(() => pourIntoCup())
    .then(() => {
        console.log("Coffee ready for the team!");
    })
    .catch((error) => {
        console.error("Coffee preparation failed ->", error);
    });