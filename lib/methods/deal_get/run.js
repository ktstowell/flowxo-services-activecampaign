'use strict';

module.exports = function(options, done) {
  this.request({action: 'deal/get', body: options.input})
  	.then(function(result) {
  		done(null, result);
  	}, function(err) {
  		done(err);
  	});
};
