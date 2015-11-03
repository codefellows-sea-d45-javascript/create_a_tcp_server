// Write a simple tcp logging server. This server should receive tcp requests and save the request into a file.
'use strict';
var fs = require('fs');
var net = require('net');
var port = 3000;

var server = net.createServer(function(socket) {
  socket.on('data', function(data) {
    console.log(data.toString());

fs.writeFile((Date.now().toString()), data, function(err) {
    if(err) throw err;
    console.log('Saved!');
  });
});

  socket.on('end', function() {
    console.log('socket closed');
  });

  server.close(function() {
    console.log('Server closed');
  });
});

server.listen('3000', function() {
  console.log('server up on port ' + port);
});
