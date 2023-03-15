const assertEqual = function(actual, expected) {
  let trueResult = `✅ Assertion Passed: ${actual}  === ${expected}`;
  let falseResult = `🛑 Assertion Failed: ${actual} !== ${expected}`;
  if (actual === expected) {
    console.log(trueResult);
  } else {
    console.log(falseResult);
  }
  return;
};

// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
module.exports = assertEqual;