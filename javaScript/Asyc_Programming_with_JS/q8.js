const submitOrder = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isSuccess = Math.random() >= 0.5;
            if (isSuccess) {
                resolve("Order #9821 confirmed!");
            } else {
                reject(new Error("Network timeout"));
            }
        }, 800);
    });
};

async function processOrder() {
    const maxAttempts = 3;

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
            const confirmation = await submitOrder();
            console.log(`Attempt ${attempt}: Success (${confirmation})`);
            return confirmation; 
        } catch (error) {
            console.log(`Attempt ${attempt}: Failed`);
            
            if (attempt === maxAttempts) {
                throw new Error("Order could not be processed");
            }
        }
    }
}
(async () => {
    try {
        await processOrder();
    } catch (finalError) {
        console.error("Final Status:", finalError.message);
    }
})();