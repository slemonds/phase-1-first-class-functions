// take a callback function as an argument
// call the callback function
// it doesn't matter what this function returns, so long as it calls the callback function
function receivesAFunction(callback) {
    callback();
}

// take no arguments
// return a named function
function returnsANamedFunction() {
    return function namedFunction() {
    }
}

// take no argurments
// return an anonymous function
function returnsAnAnonymousFunction () {
    return function () {
    }
}
