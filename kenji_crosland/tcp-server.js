//skeleton for assignment made with help from in class code
'use strict';
var net = require('net');
var fs = require('fs');

var server = module.exports.server = net.createServer(function(socket){
  socket.on('data', function(data){
    console.log(data.toString());
    var requestString = "Requested on: " + new Date().toString() + "\n" + data.toString();
    var writeStream = fs.createWriteStream("datalog.log", {'flags': 'a'});
    writeStream.write(requestString);
    writeStream.end();
  });

  socket.on('end', function(){
    console.log('socket closed');
  });
});

server.listen('3000', function(){
  console.log('server up');
});
