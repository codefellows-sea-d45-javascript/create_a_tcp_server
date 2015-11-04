'use strict'

var net = require('net');
var fs = require('fs');
var date = new Date();

var server = net.createServer(function(socket) {
    var fileName = date.getTime().toString();
    var requestStream = fs.createWriteStream('./logs/' + fileName + '.txt');
    socket.pipe(requestStream);

    requestStream.on('finish', function() { //why is thi not working?? event is not 'close' or 'end' either-- I want event that fires when file is written
      console.log('finish/close event emitted');
      socket.destroy();
  });
});

server.listen('3000', function() {
  console.log('server running');
});
