import styled from 'styled-components';
import Snake from '../components/Snake';

const SnakeContainer = ({
  gridHeight, 
  gridWidth, 
  snakeGirth,
  players
}) => {
  const snakes = players.map(player => 
    <Snake key={player.id} segments={player.snakeSegments} girth={snakeGirth} />);

  return (
    <SnakeGrid height={gridHeight} width={gridWidth}>
      {snakes}
    </SnakeGrid> 
  );
};

const SnakeGrid = styled.div`
  background-color: white;
  border: 1px solid lightgrey;
  height: ${props => props.height}px;
  width: ${props => props.width}px;
`

export default SnakeContainer;