'use strict';

module.exports = function(options, done) {
	
  this.request({action: 'contact/delete', params: options.input})
  	.then(function(result) {
  		done(null, result);
  	}, function(err) {
  		done(err);
  	});
};
