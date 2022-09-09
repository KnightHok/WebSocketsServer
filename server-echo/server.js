
const WebSocket = require("ws");

const PORT = 5000;

const wsServer = new WebSocket.Server({
    port: PORT
});

wsServer.on("connection", (socket) => {
    // Some feedback
    console.log("A client connected just now");

    socket.on("message", (msg) => {
        console.log("Recieved Message from Client: " + msg);
        socket.send("Take this back: " + msg);

        // Broadcast messages to all connected clients
        wsServer.clients.forEach((client) => {
            client.send("Someone said: " + msg);
        });
    });
});



console.log( (new Date()) + " Server is listening on port " + PORT);