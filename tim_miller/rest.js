var fs = require('fs');
var net = require('net');

var server = net.createServer(function(socket) {
  console.log('connection made');

  socket.on('data', function(data) {
    var ws = fs.createWriteStream(new Date().toString());
    ws.write(data);
    ws.end();
    socket.emit('end');
  });

  socket.on('end', function() {
    process.on('SIGTERM');
    console.log('socket closed');
  });

  socket.pipe(process.stdout);
});

server.listen('3000', function() {

  console.log('IT\'S WORKING!!');
});

module.exports = server;

