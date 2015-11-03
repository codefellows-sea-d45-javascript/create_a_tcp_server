'use strict'

var net = require('net');
var fs = require('fs');
var date = new Date();

var server = net.createServer(function(socket) {
  socket.on('data', function(data) {
    var fileName = date.getTime().toString();
    var requestStream = fs.createWriteStream('./logs/' + fileName + '.txt');
    socket.pipe(requestStream);

    requestStream.on('finish', function() { //might be on 'close' or 'end'
      console.log('close event emitted');
      socket.destroy();
    });
  });
});

server.listen('3000', function() {
  console.log('server running');
});
