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


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

// 일단 arr를 다 뒤지는데 만약 genre랑 같은게 있으면 그거의 키를 알려줘봐
const findKeyByValue = function(arr, genre) {
  for(const index in arr) {
    // console.log("arr[index]:", arr[index]);
    if(arr[index] === genre) {
      console.log("index:", index, "/ arr[index]:", arr[index]);
      return index
    }
  }
};

// TEST CODE
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);