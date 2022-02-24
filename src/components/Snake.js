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
          color={player.color} >
            { i == 0
              ? <HeadMarker />
              : null
            }
        </Segment>
      ))}
    </>
  );
}

const Segment = styled(GridElement)`
  background-color: ${prop => prop.color};
  height: ${Options.snakeGirth}px;
  width: ${Options.snakeGirth}px;
  border-radius: 2px;
  padding: 3px;
`
const HeadMarker = styled.div`
  background-color: white;
  height: 4px;
  width: 4px;
`

export default Snake;