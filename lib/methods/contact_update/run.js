'use strict';

module.exports = function(options, done) {
	
	if(options.input.list) {
		// List creation syntax is super wierd. Not a fan.
		options.input['p['+options.input.list+']'] = options.input.list;

		delete options.input.list;
	}

	// Send off.
	this.request({action: 'contact/edit', body: options.input, params: {overwite: 0}})
		.then(function(result) {
			done(null, result);
		}, function(err) {
			console.log(err)
			done(err);
		});
};
