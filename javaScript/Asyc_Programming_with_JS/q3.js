function getBugs(simulateFailure = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (simulateFailure) {
                reject(new Error("API Error: Unable to fetch bug reports from server."));
            } else {
                const bugs = [
                    { id: 101, issue: "UI glitch", severity: "Low" },
                    { id: 102, issue: "API timeout", severity: "High" },
                    { id: 103, issue: "Login failure", severity: "Critical" }
                ];
                resolve(bugs);
            }
        }, 1000);
    });
}

const shouldFail = Math.random() < 0.4;

console.log("Fetching bug list...");
getBugs(shouldFail)
    .then((bugList) => {
        console.log("Bugs retrieved successfully:");
        console.table(bugList);
    })
    .catch((error) => {
        console.error("Failed to load bug tracker:", error.message);
    });