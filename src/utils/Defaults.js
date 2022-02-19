import { Movement, Options } from "./Constants";

const snakeGirth = Options.snakeGirth;

const Defaults = {
  player1: {
    id: 1, 
    color: 'blue',
    direction: Movement.RIGHT, 
    snakeSegments: [{
        top: snakeGirth, 
        left: snakeGirth * 4
    }, 
    {
        top: snakeGirth, 
        left: snakeGirth * 3
    }, 
    {
        top: snakeGirth, 
        left: snakeGirth * 2
    }]
  }
};

export default Defaults;