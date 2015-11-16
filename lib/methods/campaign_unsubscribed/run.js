'use strict';

module.exports = function(options, done) {
  var data = {},
  		fields = options.input || {};

  		console.log(fields)
  // The webhook is actually sent twice, 
  // once when the client clicks the link in their email
  // and one when they click the 'share response' button on the campaign's unsubscribed page.
  // I'm not exactly sure when the best time to complete process so I'm doing it on the share response button.
  if(fields.unsubscribe) {
  	data.name = fields.contact.first_name + ' ' + fields.contact.last_name;
  	data.reason = fields.unsubscribe.reason;
  	data.lists = fields.list.reduce(function(prev, curr) { 
  		console.log(prev, curr)
  		return prev.name + ', ' + curr.name; 
  	});
		
		done(null, data);
  }
};
