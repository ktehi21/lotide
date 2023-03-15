const words = ["ground", "control", "to", "major", "tom"];


const map = function(array, callback) {

  console.log('array: ', array);
  console.log('callback: ', callback);

  const results = [];
  for (let item of array) {
    // console.log("item", item);
    const index = array.indexOf(item);
    console.log('item BEFORE: ', item);
    console.log('item AFTER: ', callback[index]);
    // console.log('item AFTER: ', callback(item));
    console.log('---');
  }
  return results;
}

const results1 = words.map(word => word[0]);
console.log(map(words,results1));

// item BEFORE: ground
// item AFTER: g
// --
// item BEFORE: control
// item AFTER: c
// --
// item BEFORE: to
// item AFTER: t
// --
// item BEFORE: major
// item AFTER: m
// --
// item BEFORE: tom
// item AFTER: t
// --
// [ ]