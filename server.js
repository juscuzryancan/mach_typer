require('dotenv').config();
const express = require('express');
const server = express();

const client = require('./db/client');
const morgan = require('morgan');
const bodyParser = require('body-parser');

server.use(morgan('dev'));
server.use(bodyParser.json());

server.use('/api', require('./api'));

server.use((err, req, res, next) => {
    console.error('Error Handler was trigerred ->\n', err);
    res.setStatus(500).send(err);
});

server.listen(5000, () => {
    client.connect();
    console.log('The server is now up');
})