'use strict';

module.exports = {
	stringify: convertArrayToStringList
};

function convertArrayToStringList(arr) {
	return arr.reduce(function(prev, curr) {
		return prev + ', ' + curr;
	});
}