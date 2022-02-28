import { Movement } from "./Constants";

const Players = [
  {
    id: 'player1',
    name: 'Player 1',
    score: 0,
    color: 'blue',
    direction: Movement.RIGHT,
    isAlive: true, 
    snakeSegments: [],
    controls: {
      [Movement.UP]: 'w',
      [Movement.DOWN]: 's',
      [Movement.LEFT]: 'a',
      [Movement.RIGHT]: 'd',
    }
  },
  {
    id: 'player2', 
    name: 'Player 2',
    score: 0,
    color: 'pink',
    direction: Movement.LEFT, 
    isAlive: true, 
    snakeSegments: [],
    controls: {
      [Movement.UP]: 'ArrowUp',
      [Movement.DOWN]: 'ArrowDown',
      [Movement.LEFT]: 'ArrowLeft',
      [Movement.RIGHT]: 'ArrowRight',
    }
  }
];

const getPositions = (gridHeight, gridWidth) => {
  return [
      [
        { top: 1, left: 4 }, 
        { top: 1, left: 3 }, 
        { top: 1, left: 2 }
      ],
      [
        { top: gridHeight - 2, left: gridWidth - 5 }, 
        { top: gridHeight - 2, left: gridWidth - 4 }, 
        { top: gridHeight - 2, left: gridWidth - 3 }
      ]
    ];
};

export {Players, getPositions};