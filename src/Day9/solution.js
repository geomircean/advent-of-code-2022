import { input } from './input';
import { getRows } from '../utilities';
const rows = getRows(input);
const getParsedData = () => rows.map(item => item.split(' '));
const generateMatrix = (x) => (new Array(x)).fill().map(() => new Array(x).fill('.'))
export const day9Solution = () => {
  const answer1 = '';
  const answer2 = '';
  const initialData = getParsedData(rows);
  const max = initialData.reduce((prev, [, dir]) => dir > prev ? dir : prev, 0);
  console.log(max)
  const matrix = generateMatrix(max);

  return {
    dayIndex: 9,
    answer1: answer1,
    answer2: answer2
  };
};
