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

// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);


const tail = function(arr) {
  if (arr.length === 0) {
    return undefined;
  } else {
    return arr.slice(1);
  }
};

module.exports = tail;

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!
// assertEqual(result.join(), ["Lighthouse", "Labs"].join());
// // console.log(result.join(), ["Lighthouse", "Labs"].join());

// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"


// const words = ["Yo Yo", "Lighthouse", "Labs"];
// console.log(tail(words));
// assertEqual(words.length, 3); // original array should still have 3 elements!