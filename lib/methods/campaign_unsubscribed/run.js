'use strict';

module.exports = function(options, done) {
  var data = {},
  		fields = options.input || {};


  // The webhook is actually sent twice, 
  // once when the client clicks the link in their email
  // and one when they click the 'share response' button on the campaign's unsubscribed page.
  // I'm not exactly sure when the best time to complete process so I'm doing it on the share response button.
  if(fields.unsubscribed) {
  	data.name = fields.contact.first_name + ' ' + fields.contact.last_name;
  	data.list = fields.list.reduce(function(prev, curr) { 
  		return prev + ', ' + curr; 
  	});
		
		done(null, data);
  }
};
