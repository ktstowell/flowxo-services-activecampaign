'use strict';

var config = {
  name: 'Campaign Started',
  slug: 'campaign_started',
  type: 'webhook',
  kind: 'trigger',
  scripts: {
    run: require('./run')
  },
  fields: {
    input: [],
    output: []
  },
  help: {
    webhook: {
      // Provide instruction on how the user should configure the service e.g.
      // config:[
      //   'Copy the webhook URL to your clipboard',
      //   'In your account, go to settings and paste it in.'
      // ]
      config: [],
      // Provide instruction on how the user should test the webhook is properly
      // configured. For example if the hook is when a new calendar entry is
      // created in the service:
      // test: [
      //   'Create a calendar entry.'
      // ]
      test: []
    }
  }
};

module.exports = function(service) {
  service.registerMethod(config);
};
