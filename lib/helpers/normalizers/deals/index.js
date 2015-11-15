'use strict';

module.exports = {
	list: normalizeDealsList
};

function normalizeDealsList(src) {
	return (src || []).map(function(deal) { 
		return {
			value: deal.id,
			label: deal.title
		}});
}