require('dotenv').config();

const http = require('http');
const express = require('express');
const morgan = require('morgan');
const es6Renderer = require('express-es6-template-engine');

const {
    homeRouter,
    productRouter
} = require('./routers');

const app = express();
const server = http.createServer(app);

const PORT = 3000;
const HOST = '0.0.0.0';

const logger = morgan('tiny');

app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

app.use(logger);

// Parse any form data from POST requests
app.use(express.urlencoded({extended: true}));

app.use('/', homeRouter);
app.use('/products', productRouter);

server.listen(PORT, HOST, () => {
    console.log(`Listening at http://${HOST}:${PORT}`);
});

