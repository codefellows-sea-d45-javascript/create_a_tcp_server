var net = require('net');
var fs = require('fs');

exports.newServer = function(port) {
  var server = net.createServer(function(socket) {
    var file = Date.now().toString() + '.log';     
    socket.pipe(fs.createWriteStream(file));
    socket.end();
    console.log(file + ' written.');
    server.emit('finished');
  });

  server.listen(port, function() {
    console.log('server is running on port ' + port);
  });

  return server;
};