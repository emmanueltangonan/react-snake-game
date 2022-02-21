import { Options } from "../../utils/Constants";

const PlayingFieldService = {
  snakeHitWall: (top, left) => {
    return top < 0 
      || top >= Options.gridHeight
      || left < 0
      || left >= Options.gridWidth;
  },
  getRandomEmptyCell: (occupiedCells) => {
    
  }
};

const gridCells = getGridCells();

function getGridCells(){
  const {gridWidth, gridHeight, snakeGirth} = Options;

//   let maxX = gridWidth / snakeGirth;
//   let maxY = gridHeight / snakeGirth;

  let cells = [];
  for (let i = 0; i < gridWidth; i += snakeGirth){
    for (let j = 0; j < gridHeight; j += snakeGirth){
      cells.push({top: j, left: i});
    }
  }

  return cells;
}

export default PlayingFieldService;