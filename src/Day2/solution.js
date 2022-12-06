import { input } from './input';
import { getRows } from '../utilities';

const parseInput = () => getRows(input).map((item) => item.split(' '));

/*
"The first column is what your opponent is going to play:
 A for Rock, B for Paper, and C for Scissors. 
The second column, you reason, must be what you should play in response:
 X for Rock, Y for Paper, and Z for Scissors.
 Your total score is the sum of your scores for each round.
  The score for a single round is the score for the shape you selected
   (1 for Rock, 2 for Paper, and 3 for Scissors)
    plus the score for the outcome of the round
     (0 if you lost, 3 if the round was a draw, and 6 if you won).
*/

/**
 * X means you need to lose,
 * Y means you need to end the round in a draw,
 * and Z means you need to win. */
const mapWinner = {
  A: 'Y',
  B: 'Z',
  C: 'X'
};
const mapLoose = {
  A: 'Z',
  B: 'X',
  C: 'Y'
};

const mapDraw = {
  A: 'X',
  B: 'Y',
  C: 'Z'
};

const fullScenarioMap = {
  X: mapLoose,
  Y: mapDraw,
  Z: mapWinner
};
const moveScore = {
  X: 1,
  Y: 2,
  Z: 3
};

export const day2Solution = () => {
  const rounds = parseInput();
  let totalScore1 = 0;
  let totalScore2 = 0;
  rounds.forEach(([a, b]) => {
    totalScore1 += moveScore[b];
    if (mapWinner[a] === b) totalScore1 += 6;
    if (mapDraw[a] === b) totalScore1 += 3;

    let selection = fullScenarioMap[b][a];
    let roundScoring = 0;
    if (b === 'Y') roundScoring = 3;
    if (b === 'Z') roundScoring = 6;
    totalScore2 += roundScoring + moveScore[selection];
  });

  return {
    dayIndex: 2,
    answer1: totalScore1,
    answer2: totalScore2
  };
};
