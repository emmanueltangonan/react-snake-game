import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Movement } from './utils/Constants';
import Button from './components/Button';
import SnakeContainer from './containers/SnakeContainer';
import Panel from './containers/Panel';
import MovementService from './services/MovementService';
import useChangeDirection from './hooks/useChangeDirection';

// the end goal is to make this multiplayer,
// for now we'll stick with single player
const player =
  {id: 1, direction: Movement.RIGHT, snakeSegments: [{top: 0, left: 20}, {top: 0, left: 10}, {top: 0, left: 0}]};
  
function SnakeApp() {
  const [playerState, setPlayerState] = useState(player);

  useEffect(() => {
    let gameTickInterval = setInterval(() => {
      setPlayerState(prev => {
        const newPosition = MovementService.move(prev.direction, prev.snakeSegments);
        return { ...prev, snakeSegments: newPosition };
      });
    }, 100);
    
    return () => clearInterval(gameTickInterval);
  }, []);

  useChangeDirection(newDirection => {
    console.log(newDirection)
    setPlayerState(prev => { 
      return MovementService.isValidDirection(prev.direction, newDirection)
        ? { ...prev, direction: newDirection }
        : prev;
    });
  });

  return (
    <Wrapper>
      <SnakeContainer players={[playerState]} />
      <Panel>
        <Button>Pause</Button>
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
