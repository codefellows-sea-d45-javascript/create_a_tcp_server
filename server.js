var net = require('net');
var fs = require('fs');

var server = net.createServer(function(socket) {

  socket.on('data', function(data) {
    var timestamp = Date.now();
    var logInput = fs.createWriteStream(__dirname + '/logs/log' + timestamp + '.txt');
    logInput.write(data, function() {
      console.log('log entry written');
    });
  });

  socket.on('end', function() {
    console.log('socket closed');
  });

});

server.listen('3000', function() {
  console.log('server up');
});
