import styled from 'styled-components';

import { Options } from '../utils/Constants';
import Snake from '../components/Snake';

const SnakeContainer = ({players}) => {
  const snakes = players.map(player => 
    <Snake key={player.id} segments={player.snakeSegments} girth={Options.snakeGirth} />);

  return (
    <SnakeGrid height={Options.gridHeight} width={Options.gridWidth}>
      {snakes}
    </SnakeGrid> 
  );
};

const SnakeGrid = styled.div`
  position: relative;
  background-color: white;
  border: 1px solid lightgrey;
  height: ${props => props.height}px;
  width: ${props => props.width}px;
`

export default SnakeContainer;