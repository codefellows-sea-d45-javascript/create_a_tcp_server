var net = require('net');
var fs = require('fs');
var uuid = require('uuid');

var server = module.exports = exports = net.createServer(function(socket) {
  console.log('Socket connected');

  // generate unique string
  // create writable stream and pipe it to the output dir
  var file = uuid.v1();
  var writeStream = fs.createWriteStream('./output/' + file + '.txt');
  socket.pipe(writeStream);

  socket.on('end', function() {
    console.log('Socket ended');

    // save how many bytes were written
    server.bytesWrittenToDisk = writeStream.bytesWritten;
    console.log('Bytes written: ' + server.bytesWrittenToDisk);

    server.close(function() {
      console.log('Server closed');
    });
  });

  writeStream.on('error', function(err) {
    console.log(err);
  });

});

server.listen('3000', function() {
  console.log('Server running');
});
