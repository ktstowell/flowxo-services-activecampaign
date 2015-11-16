'use strict';

module.exports = function(options, done) {
	
  this.request({action: 'deal/note/add', body: options.input})
  	.then(function(result) {
  		done(null, result);
  	}, function(err) {
  		done(err);
  	});
};
