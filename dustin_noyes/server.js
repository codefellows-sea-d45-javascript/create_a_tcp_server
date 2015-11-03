var net = require('net');
var fs = require('fs');

var server = net.createServer(function(socket) {
  socket.on('data', function(data) {
    var strng = __dirname + '/docs/' +  Date.now() + '.txt';
    var fl = fs.createWriteStream(strng);
    fl.write(data);
    console.log('file created: ' + __dirname + '/docs/' +  Date.now() + '.txt');
    fl.end();
    socket.emit('end');
  });

  socket.once('end', function() {
    console.log('socket closed');
  });

});

//server listens callback rns as soon as sercer starts
server.listen('3000', function() {
  console.log('server up');
})
