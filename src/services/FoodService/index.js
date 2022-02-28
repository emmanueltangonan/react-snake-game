import Random from "../../utils/Random";
import PlayingFieldService from "../PlayingFieldService";

const FoodService = {
  generateFood: (setFoodList, gridCells, count = 1) => {
    const basicFood = { points: 1 };
    const cellsArray = PlayingFieldService.getRandomEmptyCell(gridCells, count);
    const newFood = cellsArray.map(cell => {
      return {...basicFood, ...cell}
    });

    setFoodList(prev => [...prev, ...newFood]);

    PlayingFieldService.updateGridCells(
      gridCells,
      newFood
    );
  }
};

export default FoodService;