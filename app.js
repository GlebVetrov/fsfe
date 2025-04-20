const http = require("http");
const express = require("express");
const app = express();
const PORT = 3000;
const server = http.createServer();

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

server.on("request", app);
server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

// WebSocket

const WebSocketServer = require("ws").Server;

const wss = new WebSocketServer({ server });

wss.on("connection", function connection(ws) {
  const numClients = wss.clients.size;
  console.log("Clients connected:", numClients);

  wss.broadcast(`Current visitors: ${numClients}`);

  if (ws.readyState === ws.OPEN) {
    ws.send("Welcome to my server");
  }

  ws.on("close", function close() {
    console.log("A client has disconnected:");
  });
});

wss.broadcast = (data) => {
  wss.clients.forEach((client) => {
    client.send(data);
  });
};
