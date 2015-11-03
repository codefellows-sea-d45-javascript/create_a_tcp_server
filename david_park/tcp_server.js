var net = require('net');
var fs = require('fs');

var server = net.createServer(function(socket) {
  var writeStream = fs.createWriteStream("./data/" + Date.now());
  socket.pipe(writeStream);

  console.log("received request");

  socket.on('end', function() {
  console.log('socket closed');
  });
});

server.listen('3000', function() {
  console.log('server up');
});

