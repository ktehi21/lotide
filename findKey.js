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




// 일단 arr를 다 뒤지는데 만약 condition이랑 같은게 있으면 그거의 키를 알려줘봐
const findKey = function(arr, condition) {
  for(const index in arr) {
    // console.log("index:", index, "/ arr[index]:", arr[index], 
    // "/ arr[index].stars:", arr[index].stars);
    // console.log("condition(arr[index]: ", condition(arr[index]));
    if(condition(arr[index])) {
      return index;
    }
  }
};

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma"); // => "noma"

// TEST CODE
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);