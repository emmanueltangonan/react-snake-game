import styled from 'styled-components';
import GridElement from './GridElement'

const Snake = ({segments}) => {
  return (
    <>
      {segments.map((segment, i) => (
        <Segment key={i} top={segment.top} left={segment.left} />
      ))}
    </>
  );
}

const Segment = styled(GridElement)`
  background-color: black;
  height: 10px;
  width: 10px;
  border-radius: 2px;
`

export default Snake;