const assertEqual = require('../assertEqual');
const countOnly = require('../countOnly');

// TEST CODE
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


// describe("#countOnly", () => {
//   it("returns false for comparison Lighthouse Labs and Bootcamp", () => {
//     assert.strictEqual(assertEqual(result1["Jason"], 1), false);
//   });

//   it("returns true for comparison 1 and 1 ", () => {
//     assert.strictEqual(assertEqual(1, 1), true);
//   });


// });