var net = require('net');
var fs = require('fs');
var uuid = require('uuid');

var server = net.createServer(function(socket) {
  socket.on('data', function(data) {
    // generate unique string
    var file = uuid.v1();

    fs.writeFile('./output/' + file + '.txt', data, function(err) {
      if (err) throw err;
      console.log('File saved');
    });

  });

  socket.on('end', function() {
    console.log('Socket ended');
  });

  server.close(function() {
    console.log('Server closed');
  });

});

server.listen('3000', function() {
  console.log('Server running');
});
