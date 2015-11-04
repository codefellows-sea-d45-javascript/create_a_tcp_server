var fs = require('fs');
var net = require('net');

var server = net.createServer(function(socket) {
  console.log('connection made');

  socket.on('data', function(data) {
    var ws = fs.createWriteStream(__dirname + '/requests/' + Date.now() + '.txt');
    ws.write(data);
    ws.end();
    socket.emit('end');
  });

  socket.on('end', function() {
    console.log('socket closed');
  });

  socket.pipe(process.stdout);
});

server.listen('3000', function() {

  console.log('IT\'S WORKING!!');
});

module.exports = server;

