var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require(__dirname + '/../lib/tcp_server.js');

chai.use(chaiHttp);


