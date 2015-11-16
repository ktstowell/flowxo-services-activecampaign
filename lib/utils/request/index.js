'use strict';

var q = require('q');
var _ = require('lodash');
var AC = new (require('activecampaign'))(process.env.URL, process.env.KEY);

module.exports = function(options) {
  var def = q.defer();

  // Request builder:
  // I like to make API's feel like a functional system
  // Particularly helpful in this case as AC's api takes query params and
  // body data simultaneously in many of their endpoints.
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


/**
 * Request state mamagement. Doing it this way makes it very easy
 * for us to change the invocation in the exports closure.
 * @param  {[type]} action [description]
 * @return {[type]}        [description]
 */
function request(action) {
  var opts = {
    url: action || '',
    body: {},
    params: {api_output: 'json'} 
  };

  var API = {
  	/**
  	 * Formats and applies the context's param data.
  	 * @param  {[type]} params [description]
  	 * @return {[type]}        [description]
  	 */
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
            opts.url += '&';
          }

          count++;
        }
      }

      return this;
    },
    /**
     * Applies post params.
     * @param  {[type]} body [description]
     * @return {[type]}      [description]
     */
    body: function(body) {
      opts.body = body || {};

      return this;
    },
    /**
     * Uses AC's wrapper to make request.
     * @return {[type]} [description]
     */
    make: function() {
      return AC.api(opts.url, opts.body);
    }
  };

  return API;
}