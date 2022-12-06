import { cratesList, moves } from './input';
import { getRows } from '../utilities';

/** deep copy */
const initialise = () => cratesList.map((row) => [...row]);

/**move 1 from 7 to 4 */
const getMove = (move) => {
  if (!move) return {};
  const [firstPart, positions] = move.split(' from ');
  const [fromPosition, toPosition] = positions.split(' to ');
  const [, howMany] = firstPart.split('move ');
  return { fromPosition: fromPosition - 1, toPosition: toPosition - 1, howMany };
};

export const day5Solution = () => {
  const movesList = getRows(moves);
  let crates = initialise();

  movesList.forEach((move) => {
    const { howMany, fromPosition, toPosition } = getMove(move);
    const cratesToRemove = [];
    for (let i = 0; i < howMany; i++) {
      cratesToRemove.push(crates[fromPosition].pop());
    }
    crates[toPosition] = crates[toPosition].concat(cratesToRemove);
  });
  const answer1 = crates.map((item) => item[item.length - 1]);

  crates = initialise();

  movesList.forEach((move) => {
    const { howMany, fromPosition, toPosition } = getMove(move);
    const cratesToRemove = [];
    for (let i = 0; i < howMany; i++) {
      cratesToRemove.push(crates[fromPosition].pop());
    }
    crates[toPosition] = crates[toPosition].concat(cratesToRemove.reverse());
  });
  const answer2 = crates.map((item) => item[item.length - 1]);

  return {
    dayIndex: 5,
    answer1: answer1.join(''),
    answer2: answer2.join('')
  };
};
