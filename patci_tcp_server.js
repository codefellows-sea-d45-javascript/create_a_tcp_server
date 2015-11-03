var net = require('net');
var uuid = require('node-uuid');
var fs = require('fs');
var request = require('superagent');

var server = net.createServer(function(socket) {
  socket.on('data', function(data) {
    var writeStream = fs.createWriteStream(__dirname + '/lib/' + uuid.v1() + '.txt');
    writeStream.write(data);
    console.log('unique file has been saved!');
    writeStream.end();
    socket.end();
    socket.on('end', function(data) {
        console.log('socket closed');
      });
    });
  });

server.listen('3000', function() {
  console.log('server up on port 3000');
  request.get('http://localhost:3000')
  .end(function(err, res){});
});

module.exports = server;




