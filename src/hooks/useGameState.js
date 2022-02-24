import { useState } from "react";
import { ButtonText, GameState } from "../utils/Constants";

const useGameState = (initState) => {
  const [gameState, setGameState] = useState(initState);

  let gameStateDesc;
  let buttonText;
  switch(gameState) {
    case GameState.NEW:
      gameStateDesc = 'New Game';
      buttonText = ButtonText.START;
      break;
    case GameState.PAUSED:
      gameStateDesc = 'Paused';
      buttonText = ButtonText.CONTINUE;
      break;
    case GameState.GAME_OVER:
      gameStateDesc = 'Game Over';
      buttonText = ButtonText.NEW_GAME;
      break;
    case GameState.ACTIVE:
      gameStateDesc = '';
      buttonText = ButtonText.PAUSE;
  }

  return [gameState, gameStateDesc, buttonText, setGameState];
};

export default useGameState;