var net = require('net');
var fs = require('fs');
var chai = require('chai'), chaiHTTP = require('chai-http');

chai.use(chaiHTTP);

var server = net.createServer(function(socket){
  socket.on('data', function(data){
    console.log(data.toString());
  });

  socket.on('end', function(){
    console.log('socket closed');
    server.close();
  });
});

server.listen(3000, function(){
  console.log('Server is up and running');
});


