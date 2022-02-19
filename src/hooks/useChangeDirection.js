import { useEffect } from "react";
import { Movement } from "../utils/Constants";

const useChangeDirection = setDirection => {
  const keyDownHandler = ({ key }) => {
    switch(key){
      case 'w':
        setDirection(Movement.UP);
        break;
      case 's':
        setDirection(Movement.DOWN);
        break;
      case 'a':
        setDirection(Movement.LEFT);
        break;
      case 'd':
        setDirection(Movement.RIGHT);
        break;
    }
  };
  
  useEffect(() => {
    window.addEventListener('keydown', keyDownHandler);

    return () => {
      window.removeEventListener('keydown', keyDownHandler);
    };
  }, []);
};

export default useChangeDirection;