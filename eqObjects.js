
// const eqArrays = function(arr1, arr2) {
//   // console.log("arr1.length: ", arr1.length);
//   if (arr1.length !== arr2.length) {
//     // console.log("length difference");
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       // console.log("arr1[i]", arr1[i]);
//       return false;
//     }
//   }
//   return true;
// };


// const assertEquals = function(actual, expected) {
//   let trueResult = `✅ Assertion Passed: ${actual}  === ${expected}`;
//   let falseResult = `🛑 Assertion Failed: ${actual} !== ${expected}`;
//   if (actual === expected) {
//     console.log(trueResult);
//   } else {
//     console.log(falseResult);
//   }
//   return;
// };

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

/*  
  1. number of key compare : same - keep going, different - false
  2. if key value are different - false
    ㄴ key : value / obj1[key], obj2[key] 
    obj 2-1. if obj1[key], obj2[key] are object ---> eqObject()
  3. else key value are same - true
*/

const eqObjects = function(object1, object2) {
  
  //// if keys are different return false
  // console.log("eqArrays(Object.keys(object1).sort(): ", Object.keys(object1).sort(),  "/ eqArrays(Object.keys(object2).sort(): ", Object.keys(object2).sort());
  if (eqArrays(Object.keys(object1).sort(), Object.keys(object2).sort()) === false) { 
    // console.log("false in eqArray level");
    return false;
  }

  let result = true;
  // console.log("x: ",  "/ object2: ", object2.sort());
  for (const key in object1) {
    // console.log("y: ", y, "/ object2[y]: ", object2[y]);
    // Array.isArray(object1);

    //// added for array objects
    // console.log("typeof object1[key]: ", typeof object1[key] );
    const value1 = object1[key];
    const value2 = object2[key];

    if (typeof object1[key] === 'object' && typeof object2[key] === 'object') {
      if(!eqObjects(value1, value2)) {
        result = false;
        return result;
      }
    } else if (value1 !== value2) {
      result = false;
      return result;
    }
    
    // original eqObjects
    // if (key == y) {
    //   if (object1[key] == object2[y]) {

    //     result = true;
    //   } else { 
    //     result = false; 
    //     // console.log("false in inside loop level"); 
    //     return result; 
    //   }
    // } 
  }
  // console.log(result);
  return result;
};

module.exports = eqObjects;