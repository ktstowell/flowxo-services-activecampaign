'use strict';

var sdk = require('flowxo-sdk');
var AC = new (require('activecampaign'))(process.env.URL, process.env.KEY);
var q = require('q');
var _ = require('lodash');
var helpers = require('./helpers');

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
service.helpers = helpers;

/**
 * API request methods
 * @type {Object}
 */
service.request = function(options) {
  var def = q.defer();

  // Build request object for wrapper
  request(options.action) // Set action (url)
    .params(options.params) // Process params
    .body(options.body) // apply post data
    .make() // perform request
      .then(function(result) {
       if(result.success) {
        def.resolve(result);
       } else {
        def.reject(result);
       }
      }, function(err) {
        def.reject(err);
      });

  return def.promise;
};

module.exports = service;


function request(action) {
  var opts = {
    url: action || '',
    body: {},
    params: {api_output: 'json'} 
  };

  var API = {
    params: function(params) {
      var length,
          count = 0;

      params =  _.merge((params && params.constructor === Object ? params : {}), opts.params);
      length = Object.keys(params).length;

      if(length) {
        opts.url += '?';

        for(var param in params) {
          opts.url += param + '=' + params[param];

          if(count < length) {
            opts.url += '&'
          }

          count++;
        }
      }

      return this;
    },
    body: function(body) {
      opts.body = body || {};

      return this;
    }, 
    make: function() {
      return AC.api(opts.url, opts.body);
    }
  };

  return API;
}