function runStageCallback(stageName, nextCallback) {
    setTimeout(() => {
        console.log(`[Callback] Stage completed: ${stageName}`);
        if (nextCallback) nextCallback();
    }, 1000);
}

function runPipelineWithCallbacks() {
    console.log("--- Starting Callback Pipeline ---");
    runStageCallback("design", () => {
        runStageCallback("build", () => {
            runStageCallback("test", () => {
                runStageCallback("deploy", () => {
                    runStageCallback("celebrate", () => {
                        console.log("[Callback] All stages finished!\n");
                        runPipelineWithAsyncAwait();
                    });
                });
            });
        });
    });
}
const runStagePromise = (stageName) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`[Async/Await] Stage completed: ${stageName}`);
            resolve();
        }, 1000);
    });
};

async function runPipelineWithAsyncAwait() {
    console.log("--- Starting Async/Await Pipeline ---");
    await runStagePromise("design");
    await runStagePromise("build");
    await runStagePromise("test");
    await runStagePromise("deploy");
    await runStagePromise("celebrate");
    console.log("[Async/Await] All stages finished!");
}

runPipelineWithCallbacks();