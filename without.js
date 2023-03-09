
const assertArraysEqual = function(actual, expected) {
  let trueResult = `✅ Assertion Passed: ${actual}  == ${expected}`;
  let falseResult = `🛑 Assertion Failed: ${actual} != ${expected}`;
  if (actual.toString() == expected.toString()) {
    console.log(trueResult);
  } else {
    console.log(falseResult);
  }
  return;
};


const without = function(arr1, arr2) {
  let j = 0;
  let resultArr = [];
  /*
  for (let i = 0; i < arr1.length; i++) {
    // if (arr1[i] === arr2[j]) {
    //   arr1 = arr1.splice(i, 1);
    // }
    if (typeof(arr1[i]) === "string" && typeof(arr2[j]) === "string") {
      
      if (arr1[i].toString() == arr2[j].toString()) {
        console.log(arr1[i].toString() == arr2[j].toString());
        arr1 = arr1.filter(item => item !== arr2[j].toString())
      }
    }
    if (arr1[i] !== arr2[j]) {
      resultArr.push(arr1[i]);
      
    } 
    // console.log(typeof(arr1[i]));
    //console.log(typeof(arr1[i]) == "string");
    
    
    j++;
  }
  */
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      resultArr.push(arr1[i]);
    }
  }
  return console.log(resultArr);
};


without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);