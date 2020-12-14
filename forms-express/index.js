const http = require("http");
const express = require("express");
const es6Renderer = require("express-es6-template-engine");
const morgan = require("morgan");
const helmet = require("helmet");
const app = express();
const server = http.createServer(app);
const port = 3000;
const host = "0.0.0.0";
const logger = morgan("tiny");

app.engine("html", es6Renderer);
app.set("views", "templates");
app.set("view engine", "html");

// Add app.use(express.urlencoded{extended: true}) so express can decode form submissions
app.use(express.urlencoded({ extended: true }));
app.use(logger);
app.use(helmet());

// **********************************************************

// - Create an array of objects (global variable) in your `index.js`

const longboards = [
    {
        model: "Silver Spoon",
        size: "9",
    },

    {
        model: "Mr Rodgers Model",
        size: "10.5",
    },

    {
        model: "Pork Chop",
        size: "9.3",
    },

    {
        model: "Love Bird",
        size: "10",
    },
];

// **********************************************************

//Add a home route that shows hello world text

app.get("/", (req, res) => {
    res.render("home", {
        locals: {
            message: "Hello World",
        },
        partials: {
            header: "partials/header",
            footer: "partials/footer",
        },
    });
});

// Add an /items route that sends the whole array using res.json()

// app.get("/items", (req, res) => {
//     res.json(longboard[id]);
// });
// res.send() back the route param (so that when you go to /items/:id, you see the id)

// app.get("/items/:id", (req, res) => {
//     res.send;
// });

// Add a pair of routes (.get and .post) for the same path: /create

// In app.post() route, use values from req.body to .push() the new value to global array

app.post("/create", (req, res) => {
    const { fullname, email, model } = req.body;
    longboards.push({ fullname, email, model });
    res.redirect("thank-you");
});
// res.render() the create form at the app.get() route

app.get("/create", (req, res) => {
    res.render("create-form");
});

//Add a /thank-you route

app.get("/thank-you", (req, res) => {
    res.render("thank-you");
});

// // **********************************************************

server.listen(port, host, () => {
    console.log("You're good to go!");
});
