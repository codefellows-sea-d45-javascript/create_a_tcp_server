'use strict';

var net = require('net');
var fs = require('fs');


var server = net.createServer((socket) => {
	socket.on('data', (data) => {
		fs.writeFile('uniquefile.log' + new Date().toString(), data.toString(), (err) => {
			if (err) return console.log(err);
		});
		socket.write('some unique thing');
		console.log('write to file');
	});

	socket.on('end', () => {
		console.log('disconnected');
		socket.end();
	});
});

server.listen('3000', () => {
	console.log('server up');
});
