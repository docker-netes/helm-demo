'use strict';
var http = require('http');
var port = process.env.PORT || 85;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Helm World\n');
}).listen(port);
