'use strict';

var config = {
  name: 'Update a Deal',
  slug: 'deal_update',
  type: 'action',
  kind: 'task',
  scripts: {
    run: require('./run'),
    input: require('./input')
  },
  fields: {
    input: [
      // {
      //   key: 'id',
      //   label: 'The Deal you wish to update.',
      //   required: true,
      //   type: 'select',
      //   input_options: []
      // },
      // {
      //   key: 'currency',
      //   label: 'Currency of the Deal',
      //   type: 'text'
      // }
      
    ],
    output: []
  }
};

module.exports = function(service) {
  service.registerMethod(config);
};
