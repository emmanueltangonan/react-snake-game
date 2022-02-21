import Random from "../../utils/Random";

const FoodService = {
  addFood: (setFoodList) => {
    let basicFood = { points: 1 };
    basicFood.top = 15;
    basicFood.left = 15;
    setFoodList(prev => [...prev, basicFood])
  }
};

export default FoodService;