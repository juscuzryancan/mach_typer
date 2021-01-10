const express = require('express');
const server = express();
const morgan = require('morgan');

server.use(morgan('dev'));

server.use('/api', require('./routes'));

server.listen(5000, () => {
    console.log('connected on 5000');
})