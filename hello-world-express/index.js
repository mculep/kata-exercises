const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);
const port = 3000;
const host = "localhost";

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/hello-you", (req, res) => {
    res.send("Hello, you");
});

app.get("/hello/:name", (req, res) => {
    const helloName = req.params.name;
    res.send(`Hello, ${helloName}`);
});

server.listen(port, host, () => {
    console.log("Running on port 3000");
});
