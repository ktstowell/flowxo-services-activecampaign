'use strict';

module.exports = {
	list: normalizePipelinesList
};

function normalizePipelinesList(pipelines) {
	
	return Object.keys(pipelines || {})
		.filter(function(key) {
			return pipelines[key] && pipelines[key].constructor === Object;
		}).map(function(key) {
  		return {
  			value: pipelines[key].id,
  			label: pipelines[key].title
  		};
  });
}