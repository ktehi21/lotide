
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


// console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
// console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);  // => should PASS

//// middle function start
let result = [];
const middle = function(middleArr) {
  let check = middleArr.length;
  let deleteOddNum = Math.floor(check / 2);
  // let deleteEvenNum = Math.floor(check / 3);
  //// EVEN array's middle
  console.log("array length: " , check);
  
  if (check === 1 || check === 2){
    //return middleResult = [ ];
    console.log("less element array: " , result);
    
    return result;
  }
  if (check % 2 !== 0) {

    result = [middleArr[deleteOddNum]];
    console.log("odd array: ", result);
    return result;
    // console.log("Input Odd Array : ", middleArr);
    // for (let i = check - 1; i >= check - deleteOddNum; i--) {
    //   middleArr.pop();
    // }
    // for (i = 0; i < deleteOddNum; i++) {
    //   middleArr.shift();
    // }
    // console.log("Output Odd Array : ", middleArr);

  }
  if(check % 2 === 0) {

    // console.log("Input Even Array : ", middleArr);
    result = [middleArr[deleteOddNum - 1], middleArr[deleteOddNum]];
    console.log("even array: ", result);
    return result;
    // for (i = check - 1; i >= check - deleteOddNum; i--) {
    //   middleArr.pop();
    // }
    // for (i = 0; i < deleteOddNum; i++) {
    //   middleArr.shift();
    // }
    // console.log("Output Even Array : ", middleArr);
  } 

};

module.exports = middle;

// middle([1]); // => []
// middle([1, 2]); // => []
// //// For arrays with odd number of elements, an array containing a single middle element should be returned.
// middle([1, 2, 3]); // => [2]
// middle([5, 6, 7]); // => [6]
// middle([11, 12, 13]); // => [12]
// middle([1, 2, 3, 4, 5]); // => [3]
// //// For arrays with an even number of elements, an array containing the two elements in the middle should be returned
// middle([1, 2, 3, 4]); // => [2, 3]
// middle([1, 2, 3, 4, 5, 6]); // => [3, 4]
// middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]); // => [6, 7]