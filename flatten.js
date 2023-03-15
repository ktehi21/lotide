
// const assertArraysEqual = function(actual, expected) {
//   let trueResult = `✅ Assertion Passed: ${actual}  == ${expected}`;
//   let falseResult = `🛑 Assertion Failed: ${actual} != ${expected}`;
//   if (actual == expected) {
//     console.log(trueResult);
//   } else {
//     console.log(falseResult);
//   }
//   return;
// };


// const eqArrays = function(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// };


const flatten = (arr) => {
  let  result = [];
  for (const x of arr) {
    console.log("x: ", x);

    if (Array.isArray(x) === true) {
      for (const y of x) {
        console.log("y: ", y);
        result.push(y);
      }
    } else { result.push(x); }
    
  }
  return console.log(result);
};

module.exports = flatten;  