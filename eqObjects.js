const assertEquals = function(actual, expected) {
  let trueResult = `✅ Assertion Passed: ${actual}  === ${expected}`;
  let falseResult = `🛑 Assertion Failed: ${actual} !== ${expected}`;
  if (actual === expected) {
    console.log(trueResult);
  } else {
    console.log(falseResult);
  }
  return;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
let result = [];
const eqObjects = function(object1, object2) {
    // console.log("Object.keys(object1)", Object.keys(object1).sort(), " /Object.keys(object2)",  Object.keys(object2).sort());

  if (Object.keys(object1).sort().length != Object.keys(object2).sort().length) { result = false; console.log(result); return result}
  for (const x in object1) {
    // console.log("x: ", x, "/ object1.length: ", object1.length);
    for (const y in object2) {
      // console.log("y: ", y, "/ object2[y]: ", object2[y]);
      
      if (x == y) {
        if (object1[x] == object2[y]) {

          result = true;
        }
      } // else { result = false; }
    }
  }
  console.log(result);
  return result;
};

// TEST CODE
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true
assertEquals(eqObjects(shirtObject , anotherShirtObject), true);

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEquals(eqObjects(shirtObject , longSleeveShirtObject), false);