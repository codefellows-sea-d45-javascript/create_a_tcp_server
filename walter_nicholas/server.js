var net = require('net');
var fs = require('fs');
var writeStream = fs.createWriteStream('output.txt', { flags : 'w' });

var server = net.createServer(function(socket) {
	socket.on('data', function(data){
		console.log(data.toString());
		socket.pipe(writeStream);
	});

	socket.on('end', function() {
		console.log('socket closed');
	});
});

server.listen('3000', function() {
	console.log('server up');
});