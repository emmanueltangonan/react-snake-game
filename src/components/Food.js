import styled from 'styled-components';
import { Options } from '../utils/Constants';
import GridElement from './GridElement'; 

const BasicFood = ({ top, left }) => {
  return (
    <Food top={top} left={left} />
  );
};

const Food = styled(GridElement)`
  background-color: black;
  height: ${Options.snakeGirth}px;
  width: ${Options.snakeGirth}px;
  border-radius: 5px;
`

export { BasicFood };