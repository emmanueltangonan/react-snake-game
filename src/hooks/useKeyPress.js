import { useEffect, useRef } from "react";
import { Movement } from "../utils/Constants";

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
      case 'ArrowUp':
        setDirectionCallback.current(Movement.UP);
        break;
      case 's':
      case 'ArrowDown':
        setDirectionCallback.current(Movement.DOWN);
        break;
      case 'a':
      case 'ArrowLeft':
        setDirectionCallback.current(Movement.LEFT);
        break;
      case 'd':
      case 'ArrowRight':
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