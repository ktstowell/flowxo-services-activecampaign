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
  				label: 'Choose a deal you wish to add a task to',
  				required: true,
  				type: 'select',
  				input_options: self.utils.normalizers.deals.list(deals.deals)
  			},
  			{
  				key: 'duedate',
  				label: 'Due date for task, Example: \'2014-03-17 09:30:00\'',
  				type: 'datetime',
  				required: true
  			},
  			{
  				key: 'type',
  				label: 'How would you categorize the task (e.g, Scheduling, Reminder)',
  				type: 'text',
  				required: true
  			},
  			{
  				key: 'owner',
  				label: 'Owner of the new note',
  				type: 'select',
  				input_options: self.utils.normalizers.users.list(users)
  			},
  			{
  				key: 'note',
  				type: 'textarea',
  				label: 'Attach a note to the task'
  			}
  		]);
  	}).catch(function(err) {
  		done(err);
  	});
  } else {
  	done(null, []);
  }
};
