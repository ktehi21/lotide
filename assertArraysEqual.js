
const assertArraysEqual = function(actual, expected) {
  let trueResult = `✅ Assertion Passed: ${actual}  == ${expected}`;
  let falseResult = `🛑 Assertion Failed: ${actual} != ${expected}`;
  if (actual == expected) {
    console.log(trueResult);
  } else {
    console.log(falseResult);
  }
  return;
};

// const eqArrays = function(arr1, arr2) {
//   if (arr1.length != arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] != arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// };

module.exports = assertArraysEqual;

// TEST CODE
// assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
