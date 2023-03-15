const middle = require('../middle');

middle([1]) // => []
middle([1, 2]) // => []
//// For arrays with odd number of elements, an array containing a single middle element should be returned.
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
//// For arrays with an even number of elements, an array containing the two elements in the middle should be returned
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]) // => [6, 7]