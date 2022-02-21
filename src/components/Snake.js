import styled from 'styled-components';
import GridElement from './GridElement';
import { Options } from "../utils/Constants";

const Snake = ({ player }) => {
  const { snakeSegments } = player;
  
  return (
    <>
      {snakeSegments.map((segment, i) => (
        <Segment 
          key={i} 
          top={segment.top} 
          left={segment.left} 
          color={player.color} />
      ))}
    </>
  );
}

const Segment = styled(GridElement)`
  background-color: ${prop => prop.color};
  height: ${Options.snakeGirth}px;
  width: ${Options.snakeGirth}px;
  border-radius: 2px;
`

export default Snake;