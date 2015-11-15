'use strict';

module.exports = {
	list: normalizeContactsList
};

function normalizeContactsList(contacts) {
	return Object.keys(contacts || {}).filter(function(key) {
    	return contacts[key] && contacts[key].constructor === Object;
    }).map(function(key) {
    	return {
    		value: contacts[key].id,
    		label: contacts[key].first_name + ' ' + contacts[key].last_name + ' ('+contacts[key].email+')'
    	}
    });
}