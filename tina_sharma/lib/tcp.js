var net = require('net');
var fs = require('fs');

var server = net.createServer(function(socket) {
  var d = new Date();
  socket.pipe(fs.createWriteStream(d + '_message.txt'));
});

server.listen('3000', function(){
  console.log('server up');
});
