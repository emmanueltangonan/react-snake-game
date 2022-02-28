import styled from 'styled-components';

const Heading = styled.h1`
  text-align: center;
  color: ${props => props.color || 'black'};
  z-index: 1000;
  position: relative;
`
export default Heading;