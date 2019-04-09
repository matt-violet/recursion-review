// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };
//return an array like object of all child elemnts which have all given class names.
// returns only elements whih are descendants of root elemtns w given className 

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
var searchElement = [];
var findElements = function(element) {
  for( var i in element.classList) {
    if(element.classList[i]===className) {
      searchElement.push(element)
    }
  }
  if(element.childNodes) {
    element.childNodes.forEach(function(item) {
      findElements(item)
    })
  }
}

findElements(document.body);
return searchElement;
};
