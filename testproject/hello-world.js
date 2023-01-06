const http = require("http");

const requestListener = (req, res) => {
    res.write("Hello World");
    res.end();
}

const server = http.createServer();
server.on("request", requestListener);

server.listen(4242, () => {
    console.log("Server is Running...");
});

// run this code with nodemon instead of node.
// nodemon is a wrap around the code node.
// This is just a development convenience.