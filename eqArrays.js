// const assertEqual = function(actual, expected) {
//   let trueResult = `✅✅✅ Assertion Passed: ${actual}  === ${expected}`;
//   let falseResult = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
//   if (actual === expected) {
//     console.log(trueResult);
//   } else {
//     console.log(falseResult);
//   }
//   return;
// };

const eqArrays = function(arr1, arr2) {
  let j =0;
  let result = true;
  if (arr1.length !== arr2.length) {
    // console.log("false in eqArray length");
    result = false;
    return result;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      // console.log(Array.isArray(arr1[i]), arr2[i])
      if (Array.isArray(arr1[i]) === true && Array.isArray(arr2[i]) === true) { 
        eqArrays(arr1[i], arr2[i]); 
      } else if (arr1[i] !== arr2[i]) {
        result = false;
        return result;
      }
    }
  }
  return result;
};

module.exports = eqArrays;