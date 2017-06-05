import numeral from 'numeral';
import {greeting} from './other.js';

const courseValue = numeral(1000).format('$0.00');
console.log(`I would pay ${courseValue} for this awesome course!`);
console.log("greate performanceS Waw");
console.log(greeting());
