import './styles.css';
import { day1Solution } from './Day1';
import { day2Solution } from './Day2';
import { day3Solution } from './Day3';
import { day4Solution } from './Day4';
import { day5Solution } from './Day5';
import { day6Solution } from './Day6';
import { day7Solution } from './Day7';

const day1 = day1Solution();
const day2 = day2Solution();
const day3 = day3Solution();
const day4 = day4Solution();
const day5 = day5Solution();
const day6 = day6Solution();
const day7 = day7Solution();

const solutions = [day1, day2, day3, day4, day5, day6, day7];

const solutionsHTML = solutions
  .map(
    ({ dayIndex, answer1, answer2 }) => `
<div class='row'>
<div class='col'>${dayIndex}</div>
<div class='col'>${answer1 || '-'}</div>
<div class='col'>${answer2 || '-'}</div>
</div>`
  )
  .join('');

document.getElementById('app').innerHTML = `
<h1>** Advent of Code y(2022) **</h1>
<div>
 Here are my solutions to advent of code
</div>
<div class='grid'>
<div class='header'>
 <div class='col'>Day</div>
 <div class='col'>First Part</div>
 <div class='col'>Second Part</div>
</div>

${solutionsHTML}

</div>
`;
