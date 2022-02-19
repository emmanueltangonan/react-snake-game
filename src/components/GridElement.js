import styled from 'styled-components';

const GridElement = styled.div`
  position: absolute;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
`

export default GridElement;