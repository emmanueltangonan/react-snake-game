import { useEffect, useRef } from "react";
import { Movement } from "../utils/Constants";

const useKeyPress = (
  players,
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

  const keyOwners = {};

  players.forEach(player => {
    const { controls } = player;
    Object.values(controls).forEach((keyName) => {
      keyOwners[keyName] = player.id;
    });
  });

  const keyDownHandler = ({ key }) => {
    switch(key){
      case 'w':
      case 'ArrowUp':
        setDirectionCallback.current(keyOwners[key], Movement.UP);
        break;
      case 's':
      case 'ArrowDown':
        setDirectionCallback.current(keyOwners[key], Movement.DOWN);
        break;
      case 'a':
      case 'ArrowLeft':
        setDirectionCallback.current(keyOwners[key], Movement.LEFT);
        break;
      case 'd':
      case 'ArrowRight':
        setDirectionCallback.current(keyOwners[key], Movement.RIGHT);
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
  }, [players]);
};

export default useKeyPress;