'use strict';

var q = require('q');

module.exports = function(options, done) {
  options.input = options.input || {};

  var target = options.input.target,
  		fields = options.input.fields,
  		self = this;

  if(!target) {
    q.all([
      this.request({action: 'contact/list', params: {ids: 'all', full: 0}}),
      this.request({action: 'list/list', params: {ids: 'all'}})
    ]).spread(function(contacts, lists) {
  			

  			done(null, [
          {
            key: 'id',
            label: 'Choose the contact you wish to update',
            required: true,
            type: 'select',
            input_options: self.helpers.normalizers.contacts.list(contacts)
          },
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
