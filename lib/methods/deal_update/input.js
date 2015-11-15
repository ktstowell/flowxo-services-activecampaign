'use strict';

var q = require('q');

module.exports = function(options, done) {
	options.input = options.input || {};

	var target = options.input.target,
			fields = options.input.fields,
			self = this;

	if(!target) {
		q.all([
			this.request({action: 'deal/list'}),
			this.request({action: 'deal/pipeline/list'}),
			this.request({action: 'deal/stage/list'}),
			this.request({action: 'user/list', params: {ids: 'all'}}),
		]).spread(function(deals, pipelines, stages, users) {

			deals = deals.deals || [];

			done(null, [{
				key: 'id',
				label: 'The Deal you wish to update.',
        required: true,
        type: 'select',
				input_options: self.helpers.normalizers.deals.list(deals)
			},
			{
        key: 'currency',
        label: 'Currency of the Deal',
        type: 'text'
      },
      {
        key: 'value',
        label: 'Value of the Deal',
        type: 'text'
      },
      {
        key: 'userid',
        label: 'Update the owner of the deal',
        type: 'select',
        input_options: self.helpers.normalizers.users.list(users)
      },
      {
        key: 'pipeline',
        label: 'The pipeline the deal belongs to',
        type: 'select',
        input_options: self.helpers.normalizers.pipelines.list(pipelines)
      },
      {
      	key: 'stage',
      	label: 'Stage the deal is in',
      	type: 'select',
      	input_options: self.helpers.normalizers.stages.list(stages)
      }]);		
		}).catch(function(err) {
			console.log(err);
		});
	} else {
		done(null, []);
	}
};