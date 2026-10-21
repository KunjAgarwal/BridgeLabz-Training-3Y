let count = 0;

function showCount() {
    function logCurrentCount() {
        console.log(`Current count: ${count}`);
    }

    logCurrentCount();
}

function increment() {
    count++;
    console.log("Increment event");
    showCount();
}

function decrement() {
    count--;
    console.log("Decrement event");
    showCount();
}

increment();
increment();
decrement();
increment();
decrement();
