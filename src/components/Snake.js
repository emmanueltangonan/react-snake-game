import GridElement from './GridElement'

const Snake = ({segments}) => {
  return (
    <>
      {segments.map((segment, i) => (
        <GridElement key={i} top={segment.top} left={segment.left} />
      ))}
    </>
  );
}

export default Snake;