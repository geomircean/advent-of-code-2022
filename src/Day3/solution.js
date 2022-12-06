import { input } from './input';
/**
 * To help prioritize item rearrangement, every item type can be converted to a priority:

 - Lowercase item types a through z have priorities 1 through 26.
 - Uppercase item types A through Z have priorities 27 through 52.
 */
const CODE_a = 'a'.charCodeAt(0);
const CODE_A = 'A'.charCodeAt(0);

const parseInput = (backpackString) =>
  backpackString.split('\n').map((backpack) => {
    const len = backpack.length;
    return [backpack.slice(0, len / 2), backpack.slice(len / 2, len)];
  });

const getPriority = (letter) => {
  const code = letter.charCodeAt(0);
  if (letter >= 'a' && letter <= 'z') return code - CODE_a + 1;
  return code - CODE_A + 27;
};

const getCommonCharacters = (arrList) =>
  arrList.reduce(
    (prevValue, currentValue) => [...prevValue].filter((item) => currentValue.includes(item)),
    arrList[0]
  );

export const day3Solution = () => {
  const backpacksPerComponents = parseInput(input);
  let answer1 = 0;
  backpacksPerComponents.forEach((backpack) => {
    const [comp1, comp2] = backpack;
    const lett = getCommonCharacters([comp1, comp2])[0];
    answer1 += getPriority(lett);
  });

  let answer2 = 0;
  const backpackList = input.split('\n');
  for (let i = 0; i < backpackList.length; i += 3) {
    const letter = getCommonCharacters(backpackList.slice(i, i + 3))[0];
    answer2 += getPriority(letter);
  }

  return {
    dayIndex: 3,
    answer1,
    answer2
  };
};
