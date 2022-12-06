import { input } from './input';

const getCaloriesPerElf = () => {
  return input
    .split('\n\n')
    .map(
      (group) =>
        group
          .split('\n')
          .map((cal) => parseInt(cal, 10))
          .reduce((sum, cv) => sum + cv),
      0
    )
    .sort((a, b) => b - a);
};

export const day1Solution = () => {
  const elfCalories = getCaloriesPerElf();
  return {
    dayIndex: 1,
    answer1: elfCalories[0],
    answer2: elfCalories[0] + elfCalories[1] + elfCalories[2]
  };
};
