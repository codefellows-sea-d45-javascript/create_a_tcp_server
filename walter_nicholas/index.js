var net = require('net');
var fs = require('fs');

var server = net.createServer(function(socket) {
	socket.on('data', function(data){
		var filename = 'generic'
		var date = new Date();
		var filename = date.getHours() + '_' + date.getMinutes() + '_' + date.getSeconds();
		var timeStamp = date.toDateString() + '_' + filename + '_' + date.getMilliseconds();
		var writeStream = fs.createWriteStream('time_stamps/' + filename + '.txt');
		writeStream.write(timeStamp);
		console.log(filename + '.txt saved to time_stamps/');
//		socket.pipe(writeStream);
	});


	socket.on('end', function() {
		console.log('socket closed');
	});
});

server.listen('3000', function() {
	console.log('server up');
});