'use strict';

module.exports = {
	stringify: convertArrayToStringList
};

function convertArrayToStringList(arr, prop) {
	var list = '';

  arr.forEach(function(itm, idx) { 
		list += (prop? itm[prop] : itm) + (arr[idx+1]? ', ' : '');
	});

  // This is what I wanted to do - but reduce is not running at all for
  // some reason. http://jsfiddle.net/ktstowell/66k1z5rL/
  // arr.reduce(function(prev, curr) {
  //   return prev + ', ' + curr;
  // });
  // 
  return list;
}