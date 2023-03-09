const assertEqual = function(actual, expected) {
  let trueResult = `✅✅✅ Assertion Passed: ${actual}  === ${expected}`;
  let falseResult = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  if (actual === expected) {
    console.log(trueResult);
  } else {
    console.log(falseResult);
  }
  return;
};

const countLetters = function (sentence) {
  console.log(sentence);
  let arr = [];
  let result = {};
  for (const index of sentence) {
    if (index !== " ") {
      arr.push(index);
    }
  }

  console.log("arr: " , arr);

  for (const value of arr) {  
    // console.log("value : " , value);
    // console.log("result[value] : " , result[value]);
    // result[value] = 0;
    if (result[value]) {
      // console.log("IF result[value] : " , value, result[value]);
      result[value] += 1;
      //console.log("AFTER result[value] : ", result[value]);
    } else {
      result[value] = 1;
      // console.log("ELSE result[value] : " , value, result[value]);
    }
  }
  
  return console.log(result);
};

// TEST CODE
countLetters("lighthouse in the house");