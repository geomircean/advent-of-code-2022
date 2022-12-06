import { getRows } from '../utilities';
import { input } from './input';

const getIntervals = (string) =>
  string.split(',').map((group) => group.split('-').map((no) => parseInt(no, 10)));

const checkInclusion = ([interval1, interval2]) => {
  if (interval1[0] >= interval2[0] && interval1[1] <= interval2[1]) return 1;
  if (interval2[0] >= interval1[0] && interval2[1] <= interval1[1]) return 1;
  return 0;
};
const checkOverlap = ([interval1, interval2]) => {
  if (interval1[0] >= interval2[0] && interval1[0] <= interval2[1]) return 1;
  if (interval1[1] >= interval2[0] && interval1[1] <= interval2[1]) return 1;
  if (interval2[0] >= interval1[0] && interval2[0] <= interval1[1]) return 1;
  if (interval2[1] >= interval1[0] && interval2[1] <= interval1[1]) return 1;
  return 0;
};
export const day4Solution = () => {
  const inputArray = getRows(input);
  let answer1 = 0;
  let answer2 = 0;
  inputArray.forEach((element) => {
    const intervals = getIntervals(element);
    answer1 += checkInclusion(intervals);
    answer2 += checkOverlap(intervals);
  });
  return {
    dayIndex: 4,
    answer1,
    answer2
  };
};
