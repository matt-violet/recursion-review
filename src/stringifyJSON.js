// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

if (Array.isArray(obj)) {
	var newArr = [];
	for (var i = 0; i < obj.length; i++) {
		newArr.push(stringifyJSON(obj[i]));		
	}
	return "[" + newArr + "]";
}
if (Object.prototype.toString.call(obj) === '[object Object]') {
	var newObj = {};
	for (key in obj) {
		newObj[key] = obj[key];	
	}
	return "'" + newObj + "'";
}

if (typeof obj === 'number') { // number 
	return obj.toString();
} 
if (typeof obj === 'boolean') {  // boolean
  return obj.toString();
} 
if (typeof obj === 'string') { // string
  return '"'+obj+'"';
} 
if (obj === null) {  // null
  return 'null';
}

//NaN

//undefined 
};
stringifyJSON({hello: 'wor'});

