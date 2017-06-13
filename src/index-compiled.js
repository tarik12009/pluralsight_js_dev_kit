'use strict';

require('./index.css');

var _numeral = require('numeral');

var _numeral2 = _interopRequireDefault(_numeral);

var _other = require('./other.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var courseValue = (0, _numeral2.default)(1000).format('$0.00');
debugger;
console.log('I would pay ' + courseValue + ' for this awesome course!');
console.log("greate performanceS Waw");
console.log((0, _other.greeting)());

//# sourceMappingURL=index-compiled.js.map