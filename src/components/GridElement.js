import styled from 'styled-components';

const GridElement = styled.div`
  background-color: black;
  position: relative;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  height: 10px;
  width: 10px;
`

export default GridElement;