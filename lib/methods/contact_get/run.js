'use strict';

module.exports = function(options, done) {
  this.request({action: 'contact/view', params: options.input})
  	.then(function(result) {
  		done(null, result);
  	}, function(err) {
  		done(err);
  	});
};
