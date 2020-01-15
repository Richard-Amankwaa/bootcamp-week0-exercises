const assert = require('assert')


/**
 * Complete the function such that it returns true if an object or any of its
 * subobjects have any falsy values and false otherwise.
 * HINT: Recursion may help here
 * HINT 2: Get the truthiness of a value by using a double bang (!!),
 *    or the untruthiness using a single bang (!)
 */
result = false
const hasFalsyValue = obj => {
  const object = Object.values(obj);
  
  if (typeof obj === "object") {
    object.forEach((element) => {hasFalsyValue(element)})
    for (i = 0; i < object.length; i++)
    {
      console.log(`${object[i]} is ${!object[i]}`)
    }
  }else{
    result = !obj
    return !obj
  }
  return result
};

const falsyObj = {
  hi: "I am falsy somewhere...",
  "i'm an number": 23,
  "i'm a boolean": true,
  "i'm an object": {
    aint: 'nuthin to look at here...',
    keeplooking: {
      oops: 0
    }
  }
};

const truthyObj = {
  truthy: true,
  stillTruthy: -1,
  yup: "this is truthy",
  anotherOne: {
    anotherTruthy: ";)"
  }
};

assert(hasFalsyValue(falsyObj) === true);
assert(hasFalsyValue(truthyObj) === false);
