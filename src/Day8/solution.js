import { input } from './input';
import { getRows } from '../utilities';

const treeRows = getRows(input).map(row => [...row].map(Number));
const directions = [-1, 0, -1, 0];
const getColumn = (colNo) => {
  let result = [];
  for (let i = 0; i < treeRows.length; i++) {
    result.push(treeRows[i][colNo]);
  }
  return result;
};
const isLargestTreeInList = (tree, list) => {
  let anyTreeLarger = false;
  for (let i = 0; i < list.length; i++) {
    if (list[i] >= tree) {
      anyTreeLarger = true;
      break;
    }
  }
  return Math.max(...list) < tree;
}
const calcViewDistance = (tree, list, direction) => {
  if (list.length < 10) {
    console.log(tree, list, direction);
  }
  if (direction < 0) list.reverse();
  let score = 0;
  for (let i = 0; i < list.length; i++) {
    score++;
    if (list[i] >= tree) {
      break;
    }
  }
  if (list.length < 10) {
    console.log('score', score);
  }
  return score;
}

export const day8Solution = () => {
  let answer2 = 0;
  const forestWidth = treeRows.length;
  const forestHeight = treeRows[0].length;
  const outsideTrees = 2 * (forestHeight + forestWidth) - 4;
  let visibleTrees = 0;

  for (let i = 1; i < treeRows.length - 1; i++) {
    for (let j = 1; j < treeRows[i].length - 1; j++) {
      const currentTree = treeRows[i][j];
      const left = treeRows[i].slice(0, j);
      const right = treeRows[i].slice(j+1);
      const column = getColumn(j);
      const top = column.slice(0, i);
      const bottom = column.slice(i + 1);
      const directionsLarger = [left, right, top, bottom].filter(list => isLargestTreeInList(currentTree, list));
      if (directionsLarger.length) {
        visibleTrees++;
        const [scoreLeft, scoreRight, scoreTop, scoreBottom] = [left, right, top, bottom].map((list, index) => calcViewDistance(currentTree, list, directions[index]))
        const treeScore = scoreLeft * scoreRight * scoreTop * scoreBottom;
        console.log(scoreLeft, scoreRight, scoreTop, scoreBottom);
        if (treeScore > answer2) {
          answer2 = treeScore;
        }
      }

    }
  }

  return {
    dayIndex: 8,
    answer1: visibleTrees + outsideTrees,
    answer2
  };
};
