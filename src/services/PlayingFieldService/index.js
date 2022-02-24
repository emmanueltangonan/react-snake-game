import { Options } from "../../utils/Constants";
import Random from "../../utils/Random";

const PlayingFieldService = {
  snakeHitWall: (top, left) => {
    return top < 0 
      || top >= Options.gridHeight
      || left < 0
      || left >= Options.gridWidth;
  },
  getRandomEmptyCell: (gridCells, numCells) => {
    const emptyCells = gridCells.filter(cell => cell.empty);
    const randomIndexes = Random.getRandomInts(emptyCells.length, numCells);
    
    const cells = [];
    randomIndexes.forEach(index => {
        cells.push(emptyCells[index]);
    });

    return cells;
  },
  updateGridCells: (gridCells, occupied = [], emptied = []) => {
    occupied.forEach(pos => {
        const index = pos.top * Options.gridWidth + pos.left;
      gridCells[index].empty = false;
    });

    emptied.forEach(pos => {
        const index = pos.top * Options.gridWidth + pos.left;
      gridCells[index].empty = true;
    });
  },
  getGridCells: () => {
    const {gridWidth, gridHeight} = Options;

    let cells = [];
    for (let i = 0; i < gridHeight; i++){
      for (let j = 0; j < gridWidth; j++){
        cells.push({ top: i, left: j, empty: true });
      }
    }

    return cells;
  }
};

export default PlayingFieldService;