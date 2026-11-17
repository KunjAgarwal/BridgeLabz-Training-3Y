const executeDeliveryStep = (stepMessage) => {
    const randomDelay = Math.floor(Math.random() * 1000) + 1000;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.15) {
                reject(new Error(`Failed during -> ${stepMessage}`));
            } else {
                console.log(stepMessage);
                resolve();
            }
        }, randomDelay);
    });
};

const takeOrder = () => executeDeliveryStep("Step 1: Order taken");
const prepare   = () => executeDeliveryStep("Step 2: Food prepared");
const pack      = () => executeDeliveryStep("Step 3: Package ready");
const dispatch  = () => executeDeliveryStep("Step 4: Out for delivery");
const deliver   = () => executeDeliveryStep("Delivery completed!");

async function runPipeline() {
    console.log("Start Pipeline");

    try {
        await takeOrder();
        await prepare();
        await pack();
        await dispatch();
        await deliver();
    } catch (error) {
        console.error("Pipeline failed!");
    }
}

runPipeline();