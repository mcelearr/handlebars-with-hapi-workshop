const staticHandler = require('./static.js');
const homeHandler = require('./home.js');
const reverseHandler = require('./reverse.js');

module.exports = [
  staticHandler, homeHandler, reverseHandler
]
