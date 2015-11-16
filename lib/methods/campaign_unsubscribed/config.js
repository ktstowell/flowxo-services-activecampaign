'use strict';

var config = {
  name: 'Campaign Unsubscribed',
  slug: 'campaign_unsubscribed',
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
        label: 'Date of contact unsubscribing'
      },
      {
        key: 'list',
        label: 'List contact belonged to'
      },
      {
        key: 'campaign__name',
        label: 'Campaign that was sent and contact unsubscribed from'
      },
      {
        key: 'unsubscribe__reason',
        label: 'Reason contact unsubscribed'
      },
      {
        key: 'name',
        label: 'Contact name'
      },
      {
        key: 'contact__email',
        label: 'Contact email'
      }
    ]
  },
  help: {
    webhook: {
     // Provide instruction on how the user should configure the service e.g.
      config:[
        'Copy the webhook URL to your clipboard',
        'In your account, go to settings and select "developers" in the left-side menu',
        'Once there, you can create/edit a trigger for when a contact unsubscribes.',
        'In the creation/edit form there is a field for providing a URL. Past this URL in there.',
      ],
      // Provide instruction on how the user should test the webhook is properly
      // configured. For example if the hook is when a new calendar entry is
      // created in the service:
      test: [
        'Create a sample campaign to a personal email. Start the campaign.',
        'In your personal email, click the link to unsubscribe. You should then see FlowXO updated with the webhook data.'
      ]
    }
  }
};

module.exports = function(service) {
  service.registerMethod(config);
};
