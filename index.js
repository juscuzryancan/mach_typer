const express = require('express');
const server = express();

const io = require('socket.io')(server);

io.on('connection', client => {
    client.on('connection')
})

server.get('/', async (req, res, next) => {
    res.send('hello');
})

server.listen(3000, () => {
    console.log('The server is currently running');
})
