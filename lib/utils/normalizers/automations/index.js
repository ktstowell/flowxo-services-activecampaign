'use strict';

module.exports = {
	list: normalizeAutomationList
};

/**
 * validates and maps SDK required values from API response
 * @param  {[type]} automations [description]
 * @return {[type]}             [description]
 */
function normalizeAutomationList(automations) {
	return Object.keys(automations || {}).filter(function(key) {
    	return automations[key] && automations[key].constructor === Object;
    }).map(function(key) {
    	return {
    		value: automations[key].id,
    		label: automations[key].name,
    		status: automations[key].status
    	};
    });
}