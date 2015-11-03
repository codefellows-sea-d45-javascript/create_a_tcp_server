'use strict';

// CLOSE SOCKET!!!

var net = require('net');
var fs = require('fs');
var dest = require(__dirname + '/lib/createFileName');

var server = net.createServer(function(socket) {
  socket.on('data', function(data) {
    fs.writeFile(__dirname + '/log/' + dest() + '.json',
      data.toString(), function(err) {
        if (err) throw err;

    });
  });

  socket.on('end', function() {
    console.log('socket closed');
  });
});

server.listen('3000', function() {
  console.log('Server running...');
});
