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
    output: [
      {
        key: 'date_time',
        label: 'Time campaign was started'
      },
      {
        key: 'initiated_by',
        label: 'Who initiated the campaign.'
      },
      {
        key: 'list',
        label: 'List campaign was sent to'
      },
      {
        key: 'campaign',
        label: 'The campaign that was sent'
      }
    ]
  },
  help: {
    webhook: {
      // Provide instruction on how the user should configure the service e.g.
      config:[
        'Copy the webhook URL to your clipboard',
        'In your account, go to settings and select "developers" in the left-side menu',
        'Once there, you can create/edit a trigger for when a campaign is started.',
        'In the creation/edit form there is a field for providing a URL. Past this URL in there.',
      ],
      // Provide instruction on how the user should test the webhook is properly
      // configured. For example if the hook is when a new calendar entry is
      // created in the service:
      test: [
        'Create a sample campaign to a personal email. Start the campaign and you should see your flowxo integration update with the webhook data.'
      ]
    }
  }
};

module.exports = function(service) {
  service.registerMethod(config);
};
