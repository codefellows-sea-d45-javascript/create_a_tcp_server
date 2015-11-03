var fs = require('fs');
var net = require('net');

module.exports = exports = function(){
  var server = net.createServer(function(socket){
    // whenever a request comes in, the folling is executed
    console.log('Some sort of connection has been established. Use it wisely!');

    server.getConnections(function(err, count){
      console.log("number of connections: " + count);
    });

    // socket.on('data', function(data){
    //   fs.writeFile(__dirname + '/../saved-reqs/' + new Date(), data)
    //   console.log('file saved!')
    //   socket.end()
    // });

    socket.on('data', function(data){
      var wStream = fs.createWriteStream(__dirname + '/../saved-reqs/' + new Date());
      wStream.write(data);
      console.log('file saved!');
      socket.end();
    });

    socket.on('end', function(){
      console.log("disconnected");
      server.getConnections(function(err, count){
        console.log("number of connections: " + count);
      });
    });

    socket.on('close', function(){
      console.log("yaay! the socket closed");
    });


  }).listen(3000, function(){
    console.log('server running on port 3000');
  });
};
