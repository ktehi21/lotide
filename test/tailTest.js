const assertEqual = require('../assertEqual');
const tail = require('../tail');

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!
assertEqual(result.join(), ["Lighthouse", "Labs"].join());
// console.log(result.join(), ["Lighthouse", "Labs"].join());

assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"


const words = ["Yo Yo", "Lighthouse", "Labs"];
// console.log(tail(words));
assertEqual(words.length, 3); // original array should still have 3 elements!