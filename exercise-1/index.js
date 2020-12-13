// # 0. Create a new project

// Use `npm init` and `git init`

// # 1. Write "Hello World" in Express

// The "/" route should show "Hello World"

// # 2. Add a "Hello You" route

// This route should be "/hello" and should show "Hello, You"

// # 3. Add a "Hello <name>" route

// Make the route "/hello/:name" and should show "Hello, <name>"

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
