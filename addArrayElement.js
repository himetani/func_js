var splat = require('./splat');

var addArrayElements = splat(function(x, y) { 
    return x + y 
});

console.log(addArrayElements([1,2]));
