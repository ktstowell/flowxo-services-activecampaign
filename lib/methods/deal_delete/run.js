'use strict';

module.exports = function(options, done) {
	console.log('OPTIONS: ', options.input)
  this.request({
  	action: 'deal/delete',
  	body: options.input
  }).then(function(deal) {
  	done(null, deal);
  }, function(err) {
  	done(err);
  });
};
