
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



const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];


const takeUntil = function(array, con1) {
  let result = [];
  for(const index of array) {
    // console.log("now index", index, index < 0);
    // console.log("con1", con1(index));
    if(con1(index)) {
      return result;
    }
    result.push(index);
  }
  return result
}

const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');


const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


// TEST CODE
assertArraysEqual(eqArrays(results1, [ 1, 2, 5, 7, 2 ]), true);
assertArraysEqual(eqArrays(results2, [ "I've", 'been', 'to', 'Hollywood' ]), true);