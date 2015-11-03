var net = require('net');
var fs = require('fs');

var server = net.createServer(function(socket) {
  socket.on('data', function(data) {
    fs.writeFile(Date.now() +'.txt', data.toString());
  });

  socket.on('end', function() {
    console.log("we're done here.");
  });
});

server.listen(3000, function() {
  console.log('server listening');
});
