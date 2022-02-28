import styled from 'styled-components';
import { Options } from '../utils/Constants';

const GridElement = styled.div`
  position: absolute;
  z-index: 1;
  top: ${props => props.top * Options.snakeGirth}px;
  left: ${props => props.left * Options.snakeGirth}px;
`

export default GridElement;