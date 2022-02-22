import { useEffect, useRef, useState } from 'react';
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
import PlayingFieldService from './services/PlayingFieldService';
import useThrottle from './hooks/useThrottle';
import FoodService from './services/FoodService';

// the end goal is to make this multiplayer,
// for now we'll stick with single player
const player = Defaults.player1;
  
function SnakeApp() {
  const [gameState, gameStateDesc, buttonText, setGameState] = useGameState(GameState.NEW);
  const [playerState, setPlayerState] = useState(player);
  const [foodList, setFoodList] = useState([]);
  const [score, setScore] = useState(0);
  const gridCellsRef = useRef(PlayingFieldService.getGridCells());
  const changingDirectionRef = useRef(false);
  const tickSpeed = 500;

  //console.log(gridCellsRef.current);

  // initialize
  useEffect(() => {
    let addedFood = FoodService.addFood(setFoodList, gridCellsRef.current);
    PlayingFieldService.updateGridCells(
      gridCellsRef.current,
      [...playerState.snakeSegments, addedFood]);
  }, []);

  useInterval(() => {
    if (gameState != GameState.ACTIVE){
      return;
    }
    
    changingDirectionRef.current = false;

    const newPosition = MovementService.move(
      playerState.direction, playerState.snakeSegments);

    let newHead = newPosition[0];
    if (PlayingFieldService.snakeHitWall(newHead.top, newHead.left)){
      setGameState(GameState.GAME_OVER);
      return;
    }

    let foodEaten = checkFoodEaten(foodList, newHead);
    if (foodEaten){
      setScore(prev => prev += foodEaten.points);
      PlayingFieldService.updateGridCells(
        gridCellsRef.current,
        [newHead]
      );
      growSnake(setPlayerState, newHead);
      // remove and add new food
      setFoodList(prev => {
        return prev.filter(f => f.top != newHead.top && f.left != newHead.left);
      });
      FoodService.addFood(setFoodList, gridCellsRef.current);
    } else {
      PlayingFieldService.updateGridCells(
        gridCellsRef.current,
        [newHead],
        [playerState.snakeSegments[playerState.snakeSegments.length - 1]]
      );
      setPlayerState(prev => {
        return { ...prev, snakeSegments: newPosition };
      });
    }

  }, tickSpeed);

  useKeyPress(changeDirection, changeStateHandler);

  function changeDirection(newDirection) {
    if (gameState != GameState.ACTIVE
        || changingDirectionRef.current){
      return;
    }

    changingDirectionRef.current = true;

    setPlayerState(prev => { 
      return MovementService.isValidDirection(playerState.direction, newDirection)
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
        window.location.reload();
        break;
    }
  }

  return (
    <Wrapper>
      <Panel>
        <h4>Score: {score}</h4>
      </Panel>
      <SnakeContainer 
        players={[playerState]} 
        gameState={gameStateDesc} 
        foodList={foodList} />
      <Panel>
        <Button onClick={changeStateHandler}>{buttonText}</Button>
      </Panel>
    </Wrapper>
  );
}

function checkFoodEaten(foodList, head){
  return foodList.find(f => f.top === head.top && f.left === head.left);
}

function growSnake(setPlayerState, newHead){
  setPlayerState(prev => {
    return {...prev, snakeSegments: [newHead, ...prev.snakeSegments]}
  });
}

const Wrapper = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`

export default SnakeApp;
