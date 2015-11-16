'use strict';

module.exports = {
	list: normalizeLists
};

/**
 * 
 * @param  {[type]} lists [description]
 * @return {[type]}       [description]
 */
function normalizeLists(lists) {
	return Object.keys(lists || {}).filter(function(key) {
    	return lists[key] && lists[key].constructor === Object;
    }).map(function(key) {
    	return {
    		value: lists[key].id,
    		label: lists[key].name
    	};
    });
}