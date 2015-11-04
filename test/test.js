var expect = require('chai').expect;
var fs = require('fs');
var assert = require('chai').assert;

describe('A wild test appears...', function(){
  it('it should run a test that tests nothing', function(done){
    expect('nothing').to.eql('nothing');
    done();
  });
  it('it should pretend like it is running another test', function(done){
    expect('pretend').to.eql('pretend');
    done();
  });
});
