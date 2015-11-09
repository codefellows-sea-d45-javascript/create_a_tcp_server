var net = require('net');
var fs = require('fs');

// Create a server instance
var server = net.createServer(function(socket) {
  socket.on('data', function(data) {

    // Save the request into a file
    var someRequest = data.toString();
    var randomNumber = function(integer) {
    	return Math.floor(Math.random() * (integer + 1));
    };

    // Each request should be saved into it's own unqiune file
    var transformed = fs.writeFileSync(randomNumber(10)+'request.txt', someRequest);
  });

  socket.on('end', function() {
  	console.log('socket closed');
  });
});

server.listen('3000', function() {
	console.log('server up');
});
