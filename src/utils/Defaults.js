import { Movement } from "./Constants";

const Defaults = {
  player1: {
    id: 1, 
    color: 'blue',
    direction: Movement.RIGHT, 
    snakeSegments: [{
        top: 1, 
        left: 4
    }, 
    {
        top: 1, 
        left: 3
    }, 
    {
        top: 1, 
        left: 2
    }]
  }
};

export default Defaults;