// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
if(typeof obj === 'number'){
  return obj.toString();
} if(typeof obj === 'boolean'){  // boolean
    return obj.toString();
} 
// string
//NaN
//Null
//undefined 
};
