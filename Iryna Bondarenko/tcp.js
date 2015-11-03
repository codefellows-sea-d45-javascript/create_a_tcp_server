var net = require ('net');
var fs = require('fs');


var uuid = guid();

var server = net.createServer(function(socket) {

	var writeStream = fs.createWriteStream(uuid + '.txt');

	socket.on('data', function (data) {
		console.log(data.toString());
	});
    socket.pipe(writeStream);
    socket.on ('end', function () {
    	console.log("socket closed");
    });
     writeStream.on('error', function (err) {
    	console.log(err);
  	});
});

server.listen('3000', function () {
	console.log("Server up");
});

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}