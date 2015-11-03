'use strict';

var net = require('net');
var fs = require('fs');
var date = new Date();
var logTime = date.toTimeString();

var server = net.createServer(function(socket) {
  var reqData = '';

  socket.on('data', function(data) {
    reqData += data;
  });

  socket.on('end', function() {
    fs.writeFile(__dirname + '/log/' + logTime, reqData);
    console.log('Request logged in: ' + logTime);
  });
});

server.listen(3000);

