const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.write("On the way to being a full stack enginner");
  res.end();
});

server.listen(PORT);

console.log(`Server started on port ${PORT}`);

