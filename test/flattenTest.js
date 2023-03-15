const assertEqual = require('../assertEqual');
const flatten = require('../flatten');


flatten([1, 2, [3, 4], 5, [6]])// => [1, 2, 3, 4, 5, 6]  