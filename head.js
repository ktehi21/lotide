// Older version 
//   const assertEqual = function(actual, expected) {
//   let trueResult = `✅✅✅ Assertion Passed: ${actual}  === ${expected}`;
//   let falseResult = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
//   if (actual === expected) {
//     console.log(trueResult);
//   } else {
//     console.log(falseResult);
//   }
//   return;
// };

// import assertEqual code
// const assertEqual = require('./assertEqual');


// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

const head = function(arr) {
  if (arr.length === 0) {
    return undefined;
  } else {
    return arr[0];
  }
};


module.exports = head;