'use strict';

var net = require('net');
var fs = require('fs');
var dest = require(__dirname + '/lib/createFileName');

var server = net.createServer(function(socket) {
  var destFile = fs.createWriteStream(__dirname + dest());
  socket.pipe(destFile);
  socket.end();

});

server.listen('3000', function() {
  console.log('Server running...');
});
