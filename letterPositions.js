
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

const letterPositions = function(sentence) {
  const results = {};

  for (const [index, char] of Object.entries(sentence)) {
    if (char !== " ") {
      if (!results[char]) {
        results[char] = [];
      }
      results[char].push(index);
    }
  }

  console.log(results);
  return results;
};
/*
const letterPositions = function(sentence) {
  let positionName = [];
  let results = {};

  console.log(sentence);
  // logic to update results here

  for (const [index, char] of sentence.entries()) {
    console.log("index: ", index, "/ char : ", char);
    // 만약에 같은 글자가 있으면 키로는 추가하지 말고 포지션만 어레이에 추가하기
    if(sentence[index] !== " ") {
      console.log("index ", index);
      positionName = sentence[index];
      results[positionName] += [,index];
    }
  }

  
  return results;
};
*/
// console.log(letterPositions("hello"));


module.exports = letterPositions;
  