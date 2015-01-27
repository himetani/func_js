var _ = require('lodash');

function unsplat(fun) {
    return function() {
        return fun.call(null, _.toArray(arguments));
    }
}

module.exports = unsplat;
