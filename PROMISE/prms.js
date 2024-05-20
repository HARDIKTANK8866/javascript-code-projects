console.log("START...");

setTimeout(() => {
    console.log("TIMEOUT CALLBACK...")
}, 1000);

Promise.resolve().then(() => {
    console.log("PROMISE RESOLVED...")
})

console.log("END...");