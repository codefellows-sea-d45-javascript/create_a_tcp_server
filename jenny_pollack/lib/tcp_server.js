var net = require('net');
var fs = require('fs');

var server = module.exports = net.createServer(function(socket){
	
	var unixTimestamp = Date.now(); 
	var file = fs.createWriteStream(__dirname + '/../logs/' +  unixTimestamp + '.txt');
	socket.pipe(file);

	socket.on('end', function(){
		console.log('connection ending');
		server.close(); 
	});
		
});

server.listen('3000', function(){
	console.log('server running');
});

//use this format to pipe the socket 
//to the file
//everything on unix is a file 
//including the console
//so stdout is a file descriptor
//we can write to it in the exact 
//same way we write to a file

//fs.createWriteStream(path, [options])
//the path should be afolder in your
//local directory
//timestamps is a good idea
//global unique identifier
//crypto.random to generate a random text string
//
//
//close the connection after you've 
//logged the data

//Write a simple tcp logging server. 
//This server should receive tcp requests 
//and save the request into a file. Each 
//request should be saved into it's own file 
//and you'll have to find something unique 
//to name them. You can use a UUID library 
//or the current time or any other means of 
//having unique strings that you can think of.