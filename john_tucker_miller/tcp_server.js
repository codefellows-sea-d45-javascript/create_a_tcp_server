var net = require('net');
var fs = require('fs');
var fileCounter = 0;

// Every time this program is run, it will write over the previous logs

var server = net.createServer(function(socket){
  socket.on('data', function(data) {
    fs.writeFileSync('response' + fileCounter + '.txt', 'Response: ' + data.toString());
    fileCounter += 1;
  });

  socket.on('end', function() {
    console.log('the socket is now closed');
  });
});

server.listen('3000', function() {
  console.log('the server is up');
});
