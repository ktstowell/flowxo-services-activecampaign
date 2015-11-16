'use strict';

module.exports = function(options, done) {
	var self = this,
  		err = this.validateScriptInput(options.input, {
  			duedate: { fxoDatetime: true }
  		});

  if(err) {
  	return done(err); }

  // The tasktype creation happens first as there is
  // no API to support GETing a taskype and the task
  // creation requires a type to br provided.
  this.request({action: 'deal/tasktype/add', body: {
  	title: options.input.type
  }}).then(function(task) {
  	console.log(task)
  	self.request({action: 'deal/task/add', body: {
			duedate: options.input.duedate.parsed.toISOString(),
			dealid: options.input.dealid,
			owner: options.input.owner,
			note: options.input.note,
			type: task.id
	  }}).then(function(result) {
	  	done(null, result);
	  }, function(err) {
	  	done(err);
	  });
  }, function(err) {
  	done(err);
  });
};
