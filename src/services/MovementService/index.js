import { Movement, Options } from '../../utils/Constants';

const MovementService = {
  isValidDirection: (currentDirection, newDirection) => {
    switch(currentDirection){
      case Movement.UP:
        return newDirection != Movement.UP && newDirection != Movement.DOWN;
      case Movement.DOWN:
        return newDirection != Movement.DOWN && newDirection != Movement.UP;
      case Movement.LEFT:
        return newDirection != Movement.LEFT && newDirection != Movement.RIGHT;
      case Movement.RIGHT:
        return newDirection != Movement.RIGHT && newDirection != Movement.LEFT;
    }
  },
  move: (direction, segments) => {
    const prevHead = segments[0];
    const bodyAndTail = [...segments.slice(0, segments.length - 1)];
    let newHead = {};
    const snakeGirth = Options.snakeGirth;

    switch(direction){
      case Movement.UP:
        newHead = {top: prevHead.top - snakeGirth, left: prevHead.left};
        break;
      case Movement.DOWN:
        newHead = {top: prevHead.top + snakeGirth, left: prevHead.left};
        break;
      case Movement.LEFT:
        newHead = {top: prevHead.top, left: prevHead.left - snakeGirth};
        break;
      case Movement.RIGHT:
        newHead = {top: prevHead.top, left: prevHead.left + snakeGirth};
        break;
    }

    return [newHead, ...bodyAndTail];
  }
};

export default MovementService;