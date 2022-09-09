
const WebSocket = require("ws");

const serverAddress = "ws://127.0.0.1:5000"

const ws = new WebSocket(serverAddress);

// attach a behavior

ws.on("open", () => {
    ws.send("Hello server");
});

ws.on("message", (msg) => {
    console.log("Recieved message from the server: " + msg);
})