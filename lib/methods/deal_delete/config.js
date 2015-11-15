'use strict';

var config = {
  name: 'Delete a Deal',
  slug: 'deal_delete',
  type: 'action',
  kind: 'task',
  scripts: {
    run: require('./run'),
    input: require('./input')
  },
  fields: {
    input: [
      {
        key: 'wat',
        label: 'hmmm',
        type: 'text'
      }
    ],
    output: []
  }
};

module.exports = function(service) {
  service.registerMethod(config);
};
