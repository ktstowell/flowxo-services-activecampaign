'use strict';

var config = {
  name: 'Add a Contact to an Automation',
  slug: 'automation_contact_add',
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
