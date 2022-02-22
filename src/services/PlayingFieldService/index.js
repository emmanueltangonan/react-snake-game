import { Options } from "../../utils/Constants";
import Random from "../../utils/Random";

const PlayingFieldService = {
  snakeHitWall: (top, left) => {
    return top < 0 
      || top >= Options.gridHeight
      || left < 0
      || left >= Options.gridWidth;
  },
  getRandomEmptyCell: (gridCells) => {
    let emptyCells = gridCells.filter(cell => cell.empty);
    let randomIndex = Random.getRandomInt(emptyCells.length);
    return emptyCells[randomIndex];
  },
  updateGridCells: (gridCells, occupied = [], emptied = []) => {
    occupied.forEach(pos => {
      let index = pos.top * Options.gridWidth + pos.left;
      gridCells[index].empty = false;
    });

    emptied.forEach(pos => {
      let index = pos.top * Options.gridWidth + pos.left;
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