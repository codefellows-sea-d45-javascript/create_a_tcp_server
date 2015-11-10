'use strict';

var net = require('net');
var fs = require('fs');
var expect = require('chai').expect;

var socket = new net.Socket({writable: true});

describe('net socket test', function() {
  before(function() {
    socket.connect({port: 8888}, function() {
      console.log('connected');
    })

  after(function() {
    socket.end(function() {
      console.log('socket end');
    })
  })



})
