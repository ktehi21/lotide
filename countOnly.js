// const assertEqual = function(actual, expected) {
//   let trueResult = `✅✅✅ Assertion Passed: ${actual}  === ${expected}`;
//   let falseResult = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
//   if (actual === expected) {
//     console.log(trueResult);
//   } else {
//     console.log(falseResult);
//   }
//   return;
// };


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

module.exports = countOnly;

  