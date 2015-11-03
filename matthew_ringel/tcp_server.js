var net = require('net');
var fs = require('fs');
var os = require('os');

var server = net.createServer(function(socket) {
  socket.on('data', function(data) {
    console.log(data.toString());
  });

  socket.on('end', function() {
    console.log('socket closed');
  });
});

server.listen('3000', function() {
  console.log('server running on port 3000');
});
