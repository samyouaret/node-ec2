const express = require('express');

const server = express();

server.get('/', (req, res) => {
    res.contentType('application/json');
    res.send({
        apiVersion: '1.0',
        description: "A sample web app"
    });
});

const PORT = 8080;
const HOST = 'localhost';
server.listen(PORT, () => console.log(`starting server at http://${HOST}:${PORT}`))