
const eqArrays = function(arr1, arr2) {
  // console.log("arr1.length: ", arr1.length);
  if (arr1.length !== arr2.length) {
    // console.log("length difference");
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      // console.log("arr1[i]", arr1[i]);
      return false;
    }
  }
  return true;
};


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
let result = false;
const eqObjects = function(object1, object2) {
    // console.log("Object.keys(object1)", Object.keys(object1).sort(), " /Object.keys(object2)",  Object.keys(object2).sort());
    // console.log("eqArrays: ", eqArrays(Object.keys(object1), Object.keys(object2)));
  // if (Object.keys(object1).sort().length != Object.keys(object2).sort().length) { result = false; console.log(result); return result}
  
  //// if keys are different return false
  if (eqArrays(Object.keys(object1).sort(), Object.keys(object2).sort()) === false) { 
    return false;
  }


  // console.log("x: ",  "/ object2: ", object2.sort());
  for (const x in object1) {
    for (const y in object2) {
      // console.log("y: ", y, "/ object2[y]: ", object2[y]);
      
      if (x == y) {
        if (object1[x] == object2[y]) {

          result = true;
        } else { result = false; return result; }
      } 
    }
  }
  // console.log(result);
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