var expect = require('chai').expect;
var superagent = require('superagent');
var fs = require('fs');
var startServer = require(__dirname + '/../lib/tcp_server.js');


describe('GET request', function(){
  // var file;
  before(function(){
    //fs.readdir and find the number of files in the dir
    //store this in a variable
    startServer();
    superagent /// try using NET library NOT http like superagent
    .get('localhost:3000/wtf')
    .end();
  });

  it('should write a new file', function(){
     expect(fs.statSync(__dirname + '/../saved-reqs/Tue\ Nov\ 03\ 2015\ 13\:35\:28\ GMT-0800\ \(PST\)').isFile()).to.eql(true);
//   setTimeout(function(){expect(fs.statSync(__dirname + '/../saved-reqs/' + new Date()).isFile()).to.eql(true);
// } , 1000)
    // expect(fs.stat(__dirname + '/../saved-reqs/' + new Date(), function(err, stats){
    //     stats.isFile
    // })

    // .isFile()).to.eql(true);





  ///TRY fs.readdir and look for change in number of files by first saving the new number in a new variable. using chai expect library  expect(newvaraible)clear
  // is.above(originalvariable))
  });
});


