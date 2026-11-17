const showEndMessage = () => {
    console.log("Welcome to the course!");
};

const greetUser = (name, callback) => {
    console.log(`Hello ${name}`);
    
    if (typeof callback === "function") {
        callback();
    }
};

greetUser("Kunj", showEndMessage);