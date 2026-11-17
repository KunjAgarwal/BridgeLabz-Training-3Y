const failingModuleIndex = Math.floor(Math.random() * 3);

function loadProfile() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (failingModuleIndex === 0) reject("Profile Failed to Load");
            else resolve("Profile Loaded");
        }, 2000);
    });
}

function loadPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (failingModuleIndex === 1) reject("Posts Failed to Load");
            else resolve("Posts Loaded");
        }, 1500);
    });
}

function loadMessages() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (failingModuleIndex === 2) reject("Messages Failed to Load");
            else resolve("Messages Loaded");
        }, 1000);
    });
}

async function loadDashboard() {
    const startTime = Date.now();
    console.log("Loading dashboard modules concurrently...");

    const moduleNames = ["Profile", "Posts", "Messages"];
    const results = await Promise.allSettled([
        loadProfile(),
        loadPosts(),
        loadMessages()
    ]);

    results.forEach((result, index) => {
        const moduleName = moduleNames[index];
        if (result.status === "fulfilled") {
            console.log(`✅ [SUCCESS] ${moduleName}: ${result.value}`);
        } else {
            console.log(`❌ [FAILED]  ${moduleName}: ${result.reason}`);
        }
    });

    const totalTime = ((Date.now() - startTime) / 1000).toFixed(2);
    console.log(`Total time taken: ${totalTime} seconds`);
}

loadDashboard();