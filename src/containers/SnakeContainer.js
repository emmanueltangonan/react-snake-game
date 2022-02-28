import styled from 'styled-components';

import { Options } from '../utils/Constants';
import Snake from '../components/Snake';
import { BasicFood } from '../components/Food';
import Heading from '../components/Heading';

const SnakeContainer = ({ players, gameState, foodList, gameResult }) => {
  const snakes = players.map(player => 
    <Snake key={player.id} player={player} />);
  const food = foodList.map((f, i) => 
    <BasicFood key={i} top={f.top} left={f.left} />);

  return (
    <SnakeGrid height={Options.gridHeight} width={Options.gridWidth}>
      <GameState>
        <Heading>{gameState}</Heading>
        {gameResult}
      </GameState>
      
      {snakes}
      {gameState === '' && food}
    </SnakeGrid> 
  );
};

const SnakeGrid = styled.div`
  position: relative;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 2px solid black;
  height: ${props => props.height * Options.snakeGirth + 4}px;
  width: ${props => props.width * Options.snakeGirth + 4}px;
`

const GameState = styled.div`
  justify-content: center;
  display: inline;
  align-items: center;
`

export default SnakeContainer;