var chai = require('chai');
var chaiHttp = require('chai-http');
var fs = require('fs');

chai.use(chaiHttp);

var appServer = 'http://localhost:3000';

describe('an http request', function() {
  // it('should have a status of 200', function() {
  //   chai.request(appServer)
  //     .get('/')
  //     .then(function (res) {
  //       console.log(res);
  //       expect(res).to.have.status(200);
  //     });
  // });

  it('should log a file containing "chai-test: true"', function() {
    var newFile;
    chai.request(appServer)
      .put('/test')
      .set('chai-test', 'true')
      .then(function (done) {
        fs.watch(__dirname + '/../log/', function(event, filename) {
          newFile = filename;
          done();
        });
        var file = fs.readFileSync(String(newFile));
        expect(file.toString()).to.contain('chai-test: true');
      });
  });
});
