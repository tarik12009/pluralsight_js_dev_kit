import './index.css';
import numeral from 'numeral';
import {greeting} from './other.js';

/* eslint-disable no-console */

const courseValue = numeral(1000).format('$0.00');
console.log(`I would pay ${courseValue} for this awesome course!`);
console.log("greate performanceS Waw");
console.log(greeting());
