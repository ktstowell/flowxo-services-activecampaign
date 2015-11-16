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
  					label: 'Select the contact you wish to delete',
  					type: 'select',
  					required: true,
  					input_options: self.helpers.normalizers.contacts.list(contacts)
  				}
  			]);
  		}, function(err) {
  			done(err);
  		});
  } else {
  	done(null, []);
  }
};
