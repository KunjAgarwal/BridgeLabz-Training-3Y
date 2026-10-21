const secretNumber = Math.floor(Math.random() * 50) + 1;
const userGuess = 27; // Change this test value to try other guesses.
console.log(`Your guess: ${userGuess}`);
console.log(`Secret number: ${secretNumber}`);
if (userGuess === secretNumber) {
    console.log("Correct guess!");
} else if (Math.abs(userGuess - secretNumber) <= 3) {
    console.log("Very close!");
} else if (userGuess > secretNumber) {
    console.log("Too high.");
} else {
    console.log("Too low.");
}