'use strict';

module.exports = function(options, done) {

	options.input = options.input || {};

	var target = options.input.target,
			fields = options.input.fields,
			self = this;

	if(!target) {

		this.request({action: 'deal/list'})
			.then(function(data) {
				done(null, [
					{
		        key: 'id',
		        label: 'Deal you wish to delete',
		        type: 'select',
		        required: true,
		        input_options: self.helpers.normalizers.deals.list(data.deals)
		      },
		      {
		      	key: 'foo',
		      	label: 'wat',
		      	type: 'text'
		      }
				]);
			});
	} else {
		done(null, []);
	}
};