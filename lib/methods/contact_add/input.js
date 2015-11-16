'use strict';

module.exports = function(options, done) {
  options.input = options.input || {};

  var target = options.input.target,
  		fields = options.input.fields,
  		self = this;

  if(!target) {
  	this.request({action: 'list/list', params: {ids: 'all'}})
  		.then(function(lists) {
  			console.log(lists)

  			done(null, [
  				{
  					key: 'email',
  					required: true,
  					label: 'New contact email',
  					type: 'text'
  				},
  				{
  					key: 'first_name',
  					label: 'First Name',
  					type: 'text'
  				},
  				{
  					key: 'last_name',
  					label: 'Last Name',
  					type: 'text' 
  				},
  				{
  					key: 'phone',
  					label: 'Phone Number',
  					type: 'text' 
  				},
  				{
  					key: 'tags',
  					label: 'Tags. Example: tag1, tag2, tag3',
  					type: 'text' 
  				},
  				{
  					key: 'ip4',
  					label: 'Contact IP address',
  					type: 'text'
  				},
  				{
  					key: 'list',
  					label: 'Select a List to add the new contact to (required)',
  					type:'select',
  					required: true,
  					input_options: self.helpers.normalizers.lists.list(lists)	
  				}
  			]);
  		}, function(err) {
  			done(err);
  		});
  }
};
