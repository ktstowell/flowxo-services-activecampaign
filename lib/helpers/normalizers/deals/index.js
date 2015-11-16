'use strict';

module.exports = {
	list: normalizeDealsList
};

/**
 * validates and maps SDK required values from API response
 * @param  {[type]} src [description]
 * @return {[type]}     [description]
 */
function normalizeDealsList(src) {
	return (src || []).map(function(deal) { 
		return {
			value: deal.id,
			label: deal.title
		};
	});
}