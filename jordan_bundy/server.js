var net = require('net');
var fs = require('fs');

var server = net.createServer(function(socket) {
  var writable = fs.createWriteStream('./file/' + new Date().getTime());
  writable.on('open', function() {
    socket.write('stream opened');
  });
  socket.pipe(writable);
  socket.on('data', function(chunk) {
    socket.end();
  });
  socket.on('end', function() {
    console.log('connection closed');
  });
});

server.listen('3000', function() {
  console.log('cowagunga');
});

