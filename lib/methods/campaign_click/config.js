'use strict';

var config = {
  name: 'Campaign Click',
  slug: 'campaign_click',
  type: 'webhook',
  kind: 'trigger',
  scripts: {
    run: require('./run')
  },
  fields: {
    input: [],
    output: [
      {
        key: 'date_time',
        label: 'Date/Time of open'
      },
      {
        key: 'campaign__name',
        label: 'Campaign who\'s link was clicked'
      },
      {
        key: 'link__url',
        label: 'URL of link that was clicked'
      },
      {
        key: 'lists',
        label: 'Lists the campaign sent to'
      },
      {
        key: 'contact__email',
        label: 'Email of contact who clicked link'
      },
      {
        key: 'name',
        label: 'Name of contact who clicked link'
      }
    ]
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
