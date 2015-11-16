'use strict';

module.exports = function(options, done) {
  options.input = options.input || {};

  var target = options.input.target,
  		fields = options.input.fields,
  		self = this;

  if(!target) {
  	this.request({action: 'deal/list'})
  		.then(function(deals) {
  			deals = deals.deals  || [];

  			done(null, [
  				{
  					key: 'id',
  					label: 'Select the Deal you wish to know more about from the list below',
  					type:'select',
  					required: true,
  					input_options: self.utils.normalizers.deals.list(deals)
  				}
  			]);
  		}, function(err) {
  			done(err);
  		});
  } else {
  	done(null, []);
  }
};
