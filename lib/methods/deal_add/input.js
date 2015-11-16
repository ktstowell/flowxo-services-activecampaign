'use strict';

var q = require('q');

module.exports = function(options, done) {
	options.input = options.input || {};

	var target = options.input.target,
			fields = options.input.fields,
			self = this;

	if(!target) {
		q.all([
			this.request({action: 'deal/pipeline/list'}),
			this.request({action: 'user/list', params: {ids: 'all'}}),
      this.request({action: 'contact/list', params: {ids: 'all', full: 0}}),
		]).spread(function(pipelines, users, contacts) {
      
			done(null, [{
        key: 'title',
        label: 'Deal Title',
        type: 'text',
        required: true
      },
			{
        key: 'currency',
        label: 'Currency of the Deal',
        type: 'text',
        required: true
      },
      {
        key: 'value',
        label: 'Value of the Deal',
        type: 'text',
        required: true
      },
      {
        key: 'owner',
        label: 'Choose an owner for this deal',
        type: 'select',
        input_options: self.utils.normalizers.users.list(users),
        required: true
      },
       {
        key: 'contactid',
        type: 'select',
        label: 'Choose a contact for the deal',
        required: true,
        input_options: self.utils.normalizers.contacts.list(contacts)
      },
      {
        key: 'contact_name',
        type: 'text',
        label: 'Name of the contact for the new deal.'
      },
      {
        key: 'organization',
        type: 'text',
        label: 'Name of the organization of the contact for the new deal.'
      },
      {
        key: 'pipeline',
        label: 'The pipeline the deal belongs to',
        type: 'select',
        input_options: self.utils.normalizers.pipelines.list(pipelines),
        required: true,
        dependants: true,
      }]);		
		}).catch(function(err) {
			done(err);
		});
	} else if(target) {

    if(target === 'pipeline') {
    
      this.request({action: 'deal/stage/list'})
        .then(function(stages) {

          done(null, [{
            key: 'stage',
            label: 'Stage the deal is in',
            type: 'select',
            required: true,
            input_options: self.utils.normalizers.stages.list(stages, options.input.fields.pipeline)
          }]);
        }, function(err) {
          done(err);
        });
    }

  } else {
		done(null, []);
	}
};