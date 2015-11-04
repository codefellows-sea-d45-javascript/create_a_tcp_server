"use strict";
var net = require('net');
var fs= require('fs');

var server = net.createServer(function(socket){

  var writeStream = fs.createWriteStream(__dirname + '/logs/logger'+ Date.now());

  socket.pipe(writeStream);

  socket.on('err', function(){
    if(err)console.log(err);
  });

  socket.on('end', function(){
    console.log('socket closed');
  });
});

server.listen('3000', function(){
  console.log('server up');
});
