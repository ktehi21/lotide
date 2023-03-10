
const assertArraysEqual = function(actual, expected) {
  let trueResult = `β Assertion Passed: ${actual}  == ${expected}`;
  let falseResult = `π Assertion Failed: ${actual} != ${expected}`;
  if (actual == expected) {
    console.log(trueResult);
  } else {
    console.log(falseResult);
  }
  return;
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] != arr2[i]) {
      return false;
    }
  }
  return true;
};

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
    // λ§μ½μ κ°μ κΈμκ° μμΌλ©΄ ν€λ‘λ μΆκ°νμ§ λ§κ³  ν¬μ§μλ§ μ΄λ μ΄μ μΆκ°νκΈ°
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

// TEST CODE
assertArraysEqual(letterPositions("hello").e, [1]);