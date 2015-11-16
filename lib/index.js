'use strict';

var sdk = require('flowxo-sdk');
var q = require('q');
var _ = require('lodash');
var utils = require('./utils');

var service = new sdk.Service({
  serviceRoot: __dirname,
  name: 'ActiveCampaign',
  slug: 'active_campaign',
  auth: {
    type: 'credentials',
    fields: [{
      type: 'text',
      key: 'key',
      label: '&#34;API Key&#34;',
      description: 'Located in your Active Campaign settings.',
      required: true
    },{
      type: 'text',
      key: 'url',
      label: 'The URL of your Active Campaign Account.',
      description: 'Located in your Active Campaign settings.',
      required: true
    }]
  },
  scripts: {
    ping: require('./ping')
  }
});

/**
 * Helper API
 * @type {[type]}
 */
service.utils = utils;

/**
 * Request alias
 * @type {[type]}
 */
service.request = service.utils.request;

/**
 * Service Export
 */
module.exports = service;