
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import EarthAge from './js/Calc.js.js';

// $(document).ready();

const output = new EarthAge();
output.ageCheck();
output.alienAge();
output.alienExpectancy();
console.log(output);











