import { input } from './input';

const isUnique = (str) => new Set(str).size === str.length;

const getUniqueGroup = (str, size) => {
  for (let i = size; i < str.length; i++) {
    const group = str.slice(i - size, i);
    const foundUniqueGroup = isUnique(group);
    if (foundUniqueGroup) {
      return i;
    }
  }
};

export const day6Solution = () => {
  const answer1 = getUniqueGroup(input, 4);
  const answer2 = getUniqueGroup(input, 14);

  return {
    dayIndex: 6,
    answer1: answer1,
    answer2: answer2
  };
};
