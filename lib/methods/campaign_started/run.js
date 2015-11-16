'use strict';

module.exports = function(options, done) {
  options.input.lists = this.utils.helpers.Array.stringify(options.input.list, 'name');

  done(null, options.input);
};
