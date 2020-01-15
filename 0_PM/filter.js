const assert = require('assert')

/**
 * Complete the implementation below such that all elements of the array
 * that are not multiples of 7 are removed.
 * HINT: You may need to use the typeof operator
 */

// TODO
const multOf7 = el => {
    if ((el % 7) === 0) {
        return true
    }else{
        return false
    }
};

// TODO
Array.prototype.filter = function(fun) {
    const newArr = [];
    this.forEach(element => {if (fun(element)){
        newArr.push(element)
    
    }})
};

const arr = [7, 8, 15, 14, 13, 70, 44, 35, 88, 77, false, "7", "hi", null];
const solution = [7, 14, 70, 35, 77];

assert(arr.filter(multOf7).every((v, i) => v === solution[i]))
