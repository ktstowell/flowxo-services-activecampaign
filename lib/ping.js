'use strict';

var AC = require('activecampaign');

module.exports = function(options, done) {
	var url = (options.credentials.url || process.env.URL) || '',
			key = (options.credentials.key || process.env.KEY) || '',
			session = new AC(url, key);

	session.credentials_test().then(function(result) {
		if(result.success) {
			done(result); 
		} else {
			done(new Error('This account appears to be invalid: ' + result));
		}
	}, function(err) {
		done(new Error('Could not connect to Active Campaign API. Provided credentials: [key: '+key+', url: '+url+']'));	
	});
};
