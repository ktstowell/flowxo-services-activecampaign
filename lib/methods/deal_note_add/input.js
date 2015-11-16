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
  		this.request({action: 'user/list', params: {ids: 'all'}})
  	]).spread(function(deals, users) {
  		
  		done(null, [
  			{
  				key: 'dealid',
  				label: 'Choose a deal you wish to add a note to',
  				required: true,
  				type: 'select',
  				input_options: self.utils.normalizers.deals.list(deals.deals)
  			},
  			{
  				key: 'owner',
  				label: 'Owner of the new note',
  				type: 'select',
  				input_options: self.utils.normalizers.users.list(users)
  			},
  			{
  				key: 'note',
  				required: true,
  				type: 'textarea',
  				label: 'Your note'
  			}
  		]);
  	}).catch(function(err) {
  		done(err);
  	});
  } else {
  	done(null, []);
  }
};
