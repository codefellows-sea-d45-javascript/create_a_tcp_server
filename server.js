'use strict';

var net = require('net');
var fs = require('fs');
var superagent = require('superagent-cli');

var server = net.createServer(function(socket) {
  socket.on('data', function(data) {
    var str = new Data().toString();
    var writeStream = fs.createWriteStream('.stream-log.log');
    writeStream.write(str);
    writeStream.end();
    socket.end();
  });

  socket.on('end', function() {
    console.log('socket closed');
  })

}).listen(8888);
