'use strict';

var config = {
  name: 'Add a Deal',
  slug: 'deal_add',
  type: 'action',
  kind: 'task',
  scripts: {
    run: require('./run'),
    input: require('./input')
  },
  fields: {
    input: [
      
    ],
    output: []
  }
};

module.exports = function(service) {
  service.registerMethod(config);
};
