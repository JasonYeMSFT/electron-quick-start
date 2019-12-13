// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

/**
 * Repro steps for the Electron Timer blocking bug
 */
var child_process = require("child_process");
let forked = child_process.fork("awaitPromise.js", [], { stdio: "pipe", cwd: process.cwd() });
forked.stdout.pipe(process.stdout);
console.log("Spawned child process", forked.pid);
forked.on("exit", () => {
    console.log("child process exits");
});
forked.on("message", (message) => {
    console.log(`child process send a message ${message}`);
});
forked.on("error", () => {
    console.log("child process send an error");
})
