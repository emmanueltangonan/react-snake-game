import styled from 'styled-components';

import { Options } from '../utils/Constants';
import Snake from '../components/Snake';
import { BasicFood } from '../components/Food';

const SnakeContainer = ({players, gameState, foodList}) => {
  const snakes = players.map(player => 
    <Snake key={player.id} player={player} />);
  const food = foodList.map((f, i) => 
    <BasicFood key={i} top={f.top} left={f.left} />);

  return (
    <SnakeGrid height={Options.gridHeight} width={Options.gridWidth}>
      <GameState>{gameState}</GameState>
      {snakes}
      {gameState === '' && food}
    </SnakeGrid> 
  );
};

const SnakeGrid = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 2px solid black;
  height: ${props => props.height * Options.snakeGirth + 4}px;
  width: ${props => props.width * Options.snakeGirth + 4}px;
`

const GameState = styled.h1`
`

export default SnakeContainer;