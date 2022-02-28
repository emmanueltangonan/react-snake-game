import { Movement } from '../../utils/Constants';

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
  getNewHead: (direction, segments) => {
    const prevHead = segments[0];
    let newHead;

    switch(direction){
      case Movement.UP:
        newHead = {top: prevHead.top - 1, left: prevHead.left};
        break;
      case Movement.DOWN:
        newHead = {top: prevHead.top + 1, left: prevHead.left};
        break;
      case Movement.LEFT:
        newHead = {top: prevHead.top, left: prevHead.left - 1};
        break;
      case Movement.RIGHT:
        newHead = {top: prevHead.top, left: prevHead.left + 1};
        break;
    }

    return newHead;
  }
};

export default MovementService;