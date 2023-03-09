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

// TEST CODE


const countOnly = function(allItems, itemsToCount) {
  const result = {};
  for (const item of allItems) {
    // console.log("Before if item : ", item, "/ itemToCount[item] : ", itemsToCount[item]);
    if (itemsToCount[item]) {
      // console.log("After if item : ", item, "/ itemToCount[item] : ", itemsToCount[item]);
      if (result[item]) {
        // console.log("BEFORE if item : ", item, "result[item] : ", result[item]);
        result[item]++;
        // console.log("AFTER item : ", item, "result[item] : ", result[item]);
      } else {
        result[item] = 1;
      }
    }
  }
  // console.log(result);
  return result;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);