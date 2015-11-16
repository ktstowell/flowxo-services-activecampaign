'use strict';

module.exports = {
	list: normalizeUsersList
};

/**
 * validates and maps SDK required values from API response
 * @param  {[type]} users [description]
 * @return {[type]}       [description]
 */
function normalizeUsersList(users) {
	 return Object.keys(users || {}).filter(function(key) {
    	return users[key] && users[key].constructor === Object;
    }).map(function(key) {
    	return {
    		value: users[key].id,
    		label: users[key].first_name + ' ' + users[key].last_name
    	};
    });
}