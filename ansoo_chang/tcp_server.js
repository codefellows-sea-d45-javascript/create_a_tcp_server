var net = require('net');

// stream is an essentially an event emitter
var server = net.createServer(function(socket) {
  socket.on('data', function(data) {

  	console.log(data.toString());
  });

  socket.on('end', function() {
  	console.log('socket closed');
  });
});

server.listen('3000', function() {
	console.log('server up');
})
