'use strict';

var net = require('net');
var fs = require('fs');


var server = net.createServer(function(socket) {
	socket.on('data', function(data) {
		fs.writeFile('uniquefile.log' + new Date().toString(), data.toString(), function(err) {
			if (err) return console.log(err);
		});
		socket.write('some unique thing');
		console.log('write to file');
	});

	socket.on('end', function() {
		console.log('disconnected');
		socket.end();
	});
});

server.listen('3000', function() {
	console.log('server up');
});



