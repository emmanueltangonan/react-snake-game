import { useEffect, useRef } from "react";
import { Movement } from "../utils/Constants";
import useThrottle from "./useThrottle";

const useKeyPress = (
  setDirection,
  setGameState
) => {

  // keep track of changes to callbacks
  const setDirectionCallback = useRef(setDirection);
  useEffect(() => {
    setDirectionCallback.current = setDirection
  }, [setDirection])

  const setGameStateCallback = useRef(setGameState);
  useEffect(() => {
    setGameStateCallback.current = setGameState
  }, [setGameState])

  const keyDownHandler = ({ key }) => {
    switch(key){
      case 'w':
        setDirectionCallback.current(Movement.UP);
        break;
      case 's':
        setDirectionCallback.current(Movement.DOWN);
        break;
      case 'a':
        setDirectionCallback.current(Movement.LEFT);
        break;
      case 'd':
        setDirectionCallback.current(Movement.RIGHT);
        break;
      case ' ':
      case 'Enter':
        setGameStateCallback.current();
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

export default useKeyPress;