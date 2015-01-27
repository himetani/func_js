var unsplat = require('./unsplat');

var joinElements = unsplat(function(array) { return array.join(' ') });

console.log(typeof joinElements(1,2));
