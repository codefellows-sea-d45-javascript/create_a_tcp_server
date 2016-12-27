var fs = require('fs');
var net = require('net');
var request = require('superagent');
var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var expect = chai.expect;
var server = require(__dirname + '/../tcp_server.js');


describe('tcp server', () => {
	it('should receive requests and save them to a file', (done) => {
		chai.request('localhost:3000')
		.get('/something')
		.end((err, socket) => {
			expect(err).to.eql(null);
			expect(socket.text).to.eql('some unique thing');
		});
			done();
	});
});
