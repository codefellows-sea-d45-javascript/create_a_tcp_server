'use strict';

exports = module.exports = function() {
  var timestamp = new Date();
  var filename = timestamp.toString()
                          .toLowerCase()
                          .split(' ')
                          .join('_');
  return '/log/' + filename;
};

