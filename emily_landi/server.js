var net = require('net');
var fs = require('fs');

var server = net.createServer(function server(socket) {

  socket.on('data', function(data) {
    console.log('Request recieved.');

    var date = new Date();
    var time = date.getTime().toString();

    fs.writeFile(__dirname + '/log/' + time, data.toString(), function(err) {
      if (err) {
        throw err;
      }
      else {
        console.log('Request has been logged to new file: ' + time);
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

});

server.listen('3000', function() {
  console.log('Server is running on port 3000.');
});
