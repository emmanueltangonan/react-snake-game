import styled from "styled-components"

import './style/SnakeApp.css';
import SnakeContainer from './containers/SnakeContainer';
import Panel from './containers/Panel';

// the end goal is to make this multiplayer,
// for now we'll stick with single player
let players = [
  {id: 1, snakeSegments: [{top: 0, left: 0}]}
];

let props = {
  gridHeight: 300, //px
  gridWidth: 400, //px
  snakeGirth: 10, //px,
  players
}

function SnakeApp() {
  return (
    <Wrapper>
      <SnakeContainer {...props } />
      <Panel>
        <button className='button-primary'>Pause</button>
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
