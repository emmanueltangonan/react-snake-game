import { Options } from "../../utils/Constants";
import Random from "../../utils/Random";

const PlayingFieldService = {
  snakeHitWall: (top, left) => {
    return top < 0 
      || top >= Options.gridHeight
      || left < 0
      || left >= Options.gridWidth;
  },
  snakeHitObstacle: (gridCells, top, left) => {
    const cell = gridCells.find(cell => cell.top == top && cell.left == left);
    return cell.fatal;
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
  updateGridCells: (gridCells, occupiedSafe = [], occupiedFatal = [], emptied = []) => {
    occupiedSafe.forEach(pos => {
      const index = pos.top * Options.gridWidth + pos.left;
      gridCells[index].empty = false;
      gridCells[index].fatal = false;
    });

    occupiedFatal.forEach(pos => {
      const index = pos.top * Options.gridWidth + pos.left;
      gridCells[index].empty = false;
      gridCells[index].fatal = true;
    });

    emptied.forEach(pos => {
      const index = pos.top * Options.gridWidth + pos.left;
      gridCells[index].empty = true;
      gridCells[index].fatal = null;
    });
  },
  getGridCells: () => {
    const {gridWidth, gridHeight} = Options;

    let cells = [];
    for (let i = 0; i < gridHeight; i++){
      for (let j = 0; j < gridWidth; j++){
        cells.push({ top: i, left: j, empty: true, fatal: null });
      }
    }

    return cells;
  }
};

export default PlayingFieldService;