var expect = require('chai').expect;
var superagent = require('superagent');
var fs = require('fs');
var startServer = require(__dirname + '/../lib/tcp_server.js');


describe('GET request', function(){
  before(function(){
    startServer();
    superagent
    .get('localhost:3000/wtf')
    .end();
    fs.watch('../saved-reqs/', function (event, filename){
      console.log(filename)
    })
  });
  it('should write a new file', function(){
    /// set up watcher to see for change adn grab the file...?

    //// fs.exists('/etc/passwd', function (exists) {
//   console.log(exists ? "it's there" : 'no passwd!');
// });  to be true
    expect(fs.statSync(__dirname + '/../saved-reqs/Tue\ Nov\ 03\ 2015\ 12\:19\:24\ GMT-0800\ \(PST\)' ).isFile()).to.eql(true);
  });
});


