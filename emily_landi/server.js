var net = require('net');
var fs = require('fs');

var server = net.createServer(function(socket) {

  socket.on('data', function(data) {
    console.log('Request recieved.');

    var date = new Date();
    var time = date.getTime().toString();

    fs.writeFile(time, data.toString(), function(err) {
      if (err) {
        throw err;
      }
      else {
        console.log('Request has been logged to new file: ' + time);
        //'socket hang up error' when socket.end() is run, but requests are still logged.
        socket.end();
      }
    });
  });

  socket.on('end', function(err) {
    if (err) {
      throw err;
    }
    else {
      console.log('Connection is now closed.');
    }
  });

}).listen('3000', function() {
  console.log('Server is running on port 3000.');
});
