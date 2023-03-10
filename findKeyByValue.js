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


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

// ์ผ๋จ arr๋ฅผ ๋ค ๋ค์ง๋๋ฐ ๋ง์ฝ genre๋ ๊ฐ์๊ฒ ์์ผ๋ฉด ๊ทธ๊ฑฐ์ ํค๋ฅผ ์๋ ค์ค๋ด
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