//skeleton for assignment made with help from in class code
'use strict';
var net = require('net');
var fs = require('fs');

var server = module.exports.server = net.createServer(function(socket){
  socket.on('data', function(data){
    var requestString = data.toString();
    var writeStream = fs.createWriteStream("datalog.log", {'flags': 'a'});
    writeStream.write(requestString);
    writeStream.end();
    socket.end();
  });

  socket.on('end', function(){
    console.log('socket closed');
    server.close();
  });
});

server.listen('3000', function(){
  console.log('server up');
  //var client = net.connect({port:3000});
  //request.get('http://localhost:3000').end(function(err, res){});
});

var client = net.connect({port: 3000},
    function() { //'connect' listener
  console.log('connected to server!');
  client.write("Requested on: " + new Date().toString());
});
