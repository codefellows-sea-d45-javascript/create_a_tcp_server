var net = require('net');
var fs = require('fs');


var server = net.createServer(function(socket) {
  socket.on('data', function(data) {
    var file = data.toString();
    console.log(file + ".txt");
    // var RandomNum = function(number) {
    //   return Math.floor((1 + Math.random()) * number);
    // };
    fs.writeFileSync(Date.now() + '.txt', file);
  });

  socket.on('end', function(data) {
    console.log('socket closed');
    server.end();
  });
});


server.listen('3000', function() {
  console.log('server up');
});
