var net = require('net');
var fs = require('fs');

var server = net.createServer(function(socket) {
  // socket.pipe(process.stdout);
  socket.on('data', function(req, res) {
    var filename = __dirname + "/tmp/" + Date.now() + ".txt";
    console.log("Writing to file at " + filename);
    fs.writeFile(filename, req, function(error) {
      if(error) return console.log(error);
    });
  });

  socket.on('end', function() {
    console.log('socket closed');
  });
});

server.listen(3000, function() {
  console.log('server started on port 3000');
});