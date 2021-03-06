'use strict';

module.exports = function(options, done) {
  options.input = options.input || {};

  var target = options.input.target,
  		fields = options.input.fields,
  		self = this;

  if(!target) {
  	this.request({action: 'contact/list', params: {ids: 'all', full: 0}})
  		.then(function(contacts) {
  			
  			done(null, [
  				{
  					key: 'id',
  					label: 'Select the Contact you wish to know more about from the list below',
  					type:'select',
  					required: true,
  					input_options: self.utils.normalizers.contacts.list(contacts)
  				}
  			]);
  		}, function(err) {
  			done(err);
  		});
  } else {
  	done(null, []);
  }
};
