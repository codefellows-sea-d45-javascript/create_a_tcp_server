var expect = require('chai').expect;
var server = require(__dirname + '/../server.js');

describe('looks into the server file', function() {
  this.backup = process.argv;
  process.argv = ['superagent', 'localhost', 'post', 'object'];
  process.argv = {};
  it('looks for file returned', function() {
    expect(server(server).to.be.text);
  });
});

// describe('looks into the server file', function() {
//   it('looks for file returned', function() {
//     process.argv = ['superagent', 'localhost', 'post', 'object']
//     expect(server(server).to.eql(''));
//   });
// });

