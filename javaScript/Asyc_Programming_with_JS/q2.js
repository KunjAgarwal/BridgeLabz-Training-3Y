console.log("Start");

setTimeout(() => {
    console.log("Macrotask: setTimeout callback executed");
}, 0);

Promise.resolve().then(() => {
    console.log("Microtask: Promise.then callback executed");
});

console.log("Synchronous log between async calls");

console.log("End");