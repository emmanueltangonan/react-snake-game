import { useState } from 'react';
import styled from 'styled-components';

import Defaults from './utils/Defaults';
import Button from './components/Button';
import SnakeContainer from './containers/SnakeContainer';
import Panel from './containers/Panel';
import MovementService from './services/MovementService';
import useKeyPress from './hooks/useKeyPress';
import useInterval from './hooks/useInterval';
import { GameState } from './utils/Constants';
import useGameState from './hooks/useGameState';

// the end goal is to make this multiplayer,
// for now we'll stick with single player
const player = Defaults.player1;
  
function SnakeApp() {
  const [gameState, gameStateDesc, buttonText, setGameState] = useGameState(GameState.NEW);
  const [playerState, setPlayerState] = useState(player);

  useInterval(() => {
    if (gameState != GameState.ACTIVE){
      return;
    }

    setPlayerState(prev => {
        const newPosition = MovementService.move(prev.direction, prev.snakeSegments);
        return { ...prev, snakeSegments: newPosition };
      });
  }, 100);

  useKeyPress(changeDirection, changeStateHandler);

  function changeDirection(newDirection) {
    if (gameState != GameState.ACTIVE){
      return;
    }

    setPlayerState(prev => { 
      return MovementService.isValidDirection(prev.direction, newDirection)
        ? { ...prev, direction: newDirection }
        : prev;
      });
  }

  function changeStateHandler() {
    switch(gameState){
      case GameState.NEW:
        setGameState(GameState.ACTIVE);
        break;
      case GameState.ACTIVE:
        setGameState(GameState.PAUSED);
        break;
      case GameState.PAUSED:
        setGameState(GameState.ACTIVE);
        break;
      case GameState.GAME_OVER:
        setGameState(GameState.ACTIVE);
        break;
    }
  }

  return (
    <Wrapper>
      <Panel>
        <h1>{gameStateDesc}</h1>
      </Panel>
      <SnakeContainer players={[playerState]} />
      <Panel>
        <Button onClick={changeStateHandler}>{buttonText}</Button>
      </Panel>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`

export default SnakeApp;
