const temperature = 28;
const isRaining = false;
const windSpeed = 10; 
let recommendation;
if (isRaining) {
    recommendation = "Stay indoors with hot coffee.";
} else if (temperature > 35) {
    recommendation = "Go swimming.";
} else if (temperature < 15 && windSpeed > 20) {
    recommendation = "Too cold and windy — stay home.";
} else {
    recommendation = "Perfect day for a walk.";
}
console.log(`Temperature: ${temperature}°C`);
console.log(`Raining: ${isRaining}`);
console.log(`Wind speed: ${windSpeed} km/h`);
console.log(`Recommendation: ${recommendation}`);