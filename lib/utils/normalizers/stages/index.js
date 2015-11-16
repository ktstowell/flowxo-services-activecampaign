'use strict';

module.exports = {
	list: normalizeStagesList
};

/**
 * validates and maps SDK required values from API response
 * @param  {[type]} stages   [description]
 * @param  {[type]} pipeline [description]
 * @return {[type]}          [description]
 */
function normalizeStagesList(stages, pipeline) {
	
	return Object.keys(stages || {}).filter(function(key) {
			return stages[key] && stages[key].constructor === Object && (pipeline? stages[key].pipeline === pipeline : true);
		})
		.map(function(key) {
			return {
				value: stages[key].id,
				label: stages[key].title
			};
	});
}