'use strict';

module.exports = function(options, done) {
	
  this.request({
  	action: 'deal/delete',
  	body: options.input
  }).then(function(deal) {
  	done(null, deal);
  }, function(err) {
  	done(err);
  });
};
