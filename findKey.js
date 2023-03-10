const assertEqual = function(actual, expected) {
  let trueResult = `โโโ Assertion Passed: ${actual}  === ${expected}`;
  let falseResult = `๐๐๐ Assertion Failed: ${actual} !== ${expected}`;
  if (actual === expected) {
    console.log(trueResult);
  } else {
    console.log(falseResult);
  }
  return;
};




// ์ผ๋จ arr๋ฅผ ๋ค ๋ค์ง๋๋ฐ ๋ง์ฝ condition์ด๋ ๊ฐ์๊ฒ ์์ผ๋ฉด ๊ทธ๊ฑฐ์ ํค๋ฅผ ์๋ ค์ค๋ด
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