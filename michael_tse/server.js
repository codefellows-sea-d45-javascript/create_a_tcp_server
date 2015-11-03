var net = require('net');
var fs = require('fs');

var server = net.createServer(function(socket) {
  socket.on('data', function(data) {
    var file = data.toString();
    console.log(file + ".txt");
    fs.writeFile(__dirname + '/output/' + new Date().toString() + '.txt', file);
  });

  socket.on('end', function(data) {
    console.log('socket closed');
    // server.end();

  });
});

server.listen('4000', function() {
  console.log('server up');
});
