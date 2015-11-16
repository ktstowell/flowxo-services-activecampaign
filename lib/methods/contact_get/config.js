'use strict';

var config = {
  name: 'Find a Contact',
  slug: 'contact_get',
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
