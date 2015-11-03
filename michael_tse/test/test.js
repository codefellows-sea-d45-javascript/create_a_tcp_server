// var TestTCP = require('test-tcp');
var net = require('net');
var expect = require('chai').expect;
var server = require(__dirname + '/../server.js');
// var request = require('superagent');

describe('Test tcp server', function () {
  it('Should do something', function(done) {
    request.get('http://localhost:4000').end(function(err, res){
      expect(request).to.be.text();
    done();
    });
  });
});



//   it('Should reply with some err message if any', function (done) {
//     var client = net.connect({ port: 4000 },
//       function() {
//         client.write('Lets send this data!');
//         }
//     );

//   // When data is returned from server
//   client.on('data', function(data) {
//       data.should.equal('reply with some err message if any');
//       client.end();
//       done();
//     });
//   });
// });




// describe('the tcp server', function() {
//   before(function() {
//     server.listen('4000', function() {
//       console.log('server up');
//     });
//   });


