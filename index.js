const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');

//// traditional way to write object key : value
// module.exports = {
//   head:   head,
//   tail:   tail,
//   middle: middle
// };

//// shortening 
module.exports = {
  head,
  tail,
  middle
};
