import Random from "../../utils/Random";
import PlayingFieldService from "../PlayingFieldService";

const FoodService = {
  addFood: (setFoodList, gridCells) => {
    let basicFood = { points: 1 };
    let position = PlayingFieldService.getRandomEmptyCell(gridCells);
    setFoodList(prev => [...prev, {...basicFood, ...position}]);
    console.log(position)
    return position;
  }
};

export default FoodService;