'use strict';

var net = require('net');
var fs = require('fs');

var server = net.createServer(function(socket) {
  socket.pipe(process.stdout);

  // var writeStream = fs.createWriteStream('./output');
}).listen(8888);
