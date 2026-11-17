const deployToServer = (serverName, delayMs) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject(`${serverName} crashed during deployment!`);
            } else {
                resolve(`${serverName} responded in ${delayMs / 1000}s`);
            }
        }, delayMs);
    });
};

const serverA = deployToServer("Server A", 2000);
const serverB = deployToServer("Server B", 3000);

Promise.race([serverA, serverB])
    .then((fastestResult) => {
        console.log("Fastest response:", fastestResult);
    })
    .catch((error) => {
        console.error("Fastest response failed:", error);
    });

Promise.all([serverA, serverB])
    .then((results) => {
        console.log("Deployment completed for all servers", results);
    })
    .catch((error) => {
        console.error("Deployment aborted due to server error:", error);
    });