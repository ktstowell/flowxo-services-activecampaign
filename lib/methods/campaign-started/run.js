'use strict';

module.exports = function(options, done) {
	console.log(options)
  done(null, options.input);
};
