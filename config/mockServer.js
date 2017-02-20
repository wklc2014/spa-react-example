'use strict';
var path = require('path');
var jsonServer = require('json-server');
var server = jsonServer.create();

var router = jsonServer.router(path.join(__dirname, 'mock/db.json'));
var middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

server.listen(8081, function () {
  console.log('JSON Server is running');
})

