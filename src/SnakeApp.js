import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { Players, getPositions } from './utils/Defaults';
import Button from './components/Button';
import SnakeContainer from './containers/SnakeContainer';
import Panel from './containers/Panel';
import MovementService from './services/MovementService';
import useKeyPress from './hooks/useKeyPress';
import useInterval from './hooks/useInterval';
import { ButtonText, GameMode, GameState, Options } from './utils/Constants';
import useGameState from './hooks/useGameState';
import PlayingFieldService from './services/PlayingFieldService';
import FoodService from './services/FoodService';
import Select from './components/Select';
import Heading from './components/Heading';
  
function SnakeApp() {
  const [gameMode, setGameMode] = useState(GameMode.SINGLE_PLAYER);
  const [gameState, gameStateDesc, buttonText, setGameState] = useGameState(GameState.NEW);
  const [allPlayers, setAllPlayers] = useState([Players[0]]);
  const [foodList, setFoodList] = useState([]);
  const [winner, setWinner] = useState(null);
  const gridCellsRef = useRef(PlayingFieldService.getGridCells());
  const directionChangedRef = useRef({});
  const tickIntervalRef = useRef(100);

  useKeyPress(allPlayers, changeDirection, changeStateHandler);

  useEffect(() => {
    initialize()
  }, [gameMode]);

  useInterval(() => {
    if (gameState != GameState.ACTIVE){
      return;
    }

    allPlayers.forEach(player => {
      directionChangedRef.current[player.id] = false;

      const newHead = MovementService.getNewHead(
        player.direction, 
        player.snakeSegments);

      if (PlayingFieldService.snakeHitWall(newHead.top, newHead.left)
          || PlayingFieldService.snakeHitObstacle(gridCellsRef.current, newHead.top, newHead.left)){
        player.isAlive = false;
        return;
      }

      const foodEaten = checkFoodEaten(foodList, newHead);
      if (foodEaten){
        increaseSnakeSpeed(tickIntervalRef);
        growTail(player.id, newHead);
        removeFood(newHead);
        FoodService.generateFood(setFoodList, gridCellsRef.current);
      } else {
        move(player.id, newHead);
      }
    });

    if(allPlayers.some(p => !p.isAlive)){
      setGameState(GameState.GAME_OVER);
      if (gameMode === GameMode.DEATHMATCH)
        setWinner(allPlayers.find(p => p.isAlive) || 'Draw');
    }
    
  }, tickIntervalRef.current);

  function initialize() {
    setGameState(GameState.NEW);
    gridCellsRef.current = PlayingFieldService.getGridCells();
    setFoodList([]);
    setDefaultPlayersAndFood();
    initializePositions(setAllPlayers, gridCellsRef.current, directionChangedRef.current);
    setWinner(null);  
}

  function setDefaultPlayersAndFood(){
    switch(gameMode){
      case GameMode.SINGLE_PLAYER:
        setAllPlayers([Players[0]]);
        FoodService.generateFood(setFoodList, gridCellsRef.current, 1);
        break;
      case GameMode.DEATHMATCH:
        setAllPlayers(Players);
        FoodService.generateFood(setFoodList, gridCellsRef.current, 2);
        break;
    }
  }

  function move(playerId, newHead){
    setAllPlayers(prev => {
      const newPlayersState = [...prev];
      const playerIndex =  newPlayersState.findIndex(p => p.id == playerId);
      const playerCopy = {...newPlayersState[playerIndex]};
      const { snakeSegments } = playerCopy;

      const lastIndex = snakeSegments.length - 1;

      PlayingFieldService.updateGridCells(
        gridCellsRef.current,
        [],
        [newHead],
        [snakeSegments[lastIndex]]);

      playerCopy.snakeSegments = [newHead, ...snakeSegments.slice(0, lastIndex)];
      newPlayersState[playerIndex] = playerCopy;
      return newPlayersState;
    });    
  }

  function growTail(playerId, newHead){
    PlayingFieldService.updateGridCells(
      gridCellsRef.current,
      [],
      [newHead]
    );

    setAllPlayers(prev => {
      const newPlayersState = [...prev];
      const playerIndex = newPlayersState.findIndex(p => p.id == playerId);
      const playerCopy = {...newPlayersState[playerIndex]};
      const { snakeSegments } = playerCopy;

      playerCopy.snakeSegments = [newHead, ...snakeSegments];
      playerCopy.score++;
      newPlayersState[playerIndex] = playerCopy;

      return newPlayersState;
    });
  }

  function changeDirection(playerId, newDirection) {
    if (gameState != GameState.ACTIVE
        // to prevent issuing multiple directions per game tick
        || directionChangedRef.current[playerId]){
      return;
    }

    setAllPlayers(prev => { 
      const newPlayersState = [...prev];
      const playerIndex = newPlayersState.findIndex(p => p.id == playerId);
      const playerCopy = {...newPlayersState[playerIndex]};

      if (MovementService.isValidDirection(playerCopy.direction, newDirection)){
        directionChangedRef.current[playerId] = true;
        playerCopy.direction = newDirection;
        newPlayersState[playerIndex] = playerCopy;
        return newPlayersState;
      }

      return prev;
    });
  }

  function removeFood(newHead){
    setFoodList(prev => {
      return prev.filter(f => !(f.top == newHead.top && f.left == newHead.left));
    });
  }

  function changeStateHandler() {
    switch(buttonText){
      case ButtonText.START:
        setGameState(GameState.ACTIVE);
        break;
      case ButtonText.PAUSE:
        setGameState(GameState.PAUSED);
        break;
      case ButtonText.CONTINUE:
        setGameState(GameState.ACTIVE);
        break;
      case ButtonText.NEW_GAME:
        initialize();
        break;
    }
  }

  const gameModes = Object.values(GameMode);

  let gameResult;
  if (gameMode == GameMode.SINGLE_PLAYER){
    gameResult = null;
  } else if (winner) {
    gameResult = winner === 'Draw'
    ? <Heading>It's a Draw!</Heading>
    : <Heading color={winner.color}>{winner.name} Wins!</Heading>;
  }

  return (
    <Wrapper>
      <Panel>
        <Select options={gameModes} onChange={setGameMode}/>
      </Panel>
      {gameMode === GameMode.SINGLE_PLAYER 
        ? <Panel>
            <h5>Score: {allPlayers[0].score}</h5>
          </Panel>
        : <Panel>
            <pre>Player 1: wsad / Player 2: arrow keys</pre>
          </Panel>}
      <SnakeContainer 
        players={allPlayers} 
        gameState={gameStateDesc}
        gameResult={gameResult} 
        foodList={foodList} />
      <Panel>
        <Button onClick={changeStateHandler}>{buttonText}</Button>
      </Panel>
    </Wrapper>
  );
}

function increaseSnakeSpeed(tickIntervalRef){
  tickIntervalRef.current = getNextTickInterval(tickIntervalRef.current);
}

function initializePositions(setAllPlayers, gridCellsRef, directionChangedTracker){
  const {gridHeight, gridWidth} = Options;
  const defaultPositions = getPositions(gridHeight, gridWidth);

  setAllPlayers(prev => {
    const newState = [...prev];
    for (let i = 0; i < newState.length; i++) {
      const player = {...newState[i]};
      const defaultPosition = defaultPositions[i];
      player.snakeSegments = defaultPosition;

      PlayingFieldService.updateGridCells(
        gridCellsRef,
        [],
        defaultPosition);

      directionChangedTracker[player.id] = false;

      newState[i] = player;
    }

    return newState;
  });
}

function checkFoodEaten(foodList, head){
  return foodList.find(f => f.top === head.top && f.left === head.left);
}

function getNextTickInterval(currentInterval){
  const next = Math.round(currentInterval / 1.01);
  return next <= Options.tickIntervalLimit 
    ? Options.tickIntervalLimit 
    : next;
}

const Wrapper = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`

export default SnakeApp;
