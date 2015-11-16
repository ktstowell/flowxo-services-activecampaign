'use strict';

var config = {
  name: 'Delete a Contact',
  slug: 'contact_delete',
  type: 'action',
  kind: 'task',
  scripts: {
    input: require('./input'),
    run: require('./run')
  },
  fields: {
    input: [],
    output: []
  }
};

module.exports = function(service) {
  service.registerMethod(config);
};
