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
			this.request({action: 'automation/list'})
		]).spread(function(contacts, automations) {
			done(null, [
				{
					key: 'automation',
					label: 'Select the automation you wish to add a contact to',
					required: true,
					type: 'select',
					input_options: self.utils.normalizers.automations.list(automations)
				},
				{
					key: 'contact_id',
					label: 'Select the contact you wish to add',
					required: true,
					type: 'select',
					input_options: self.utils.normalizers.contacts.list(contacts)
				}
			]);
		}).catch(function(err) {
			done(err);
		});
	}
};
