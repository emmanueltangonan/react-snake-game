import { useRef } from 'react';
import styled from 'styled-components';

const Select = ({options, onChange}) => {
  const selectRef = useRef(null);

  function onChangeHandler(event){
    onChange(event.target.value);
    selectRef.current.blur();
  }
    
  return (
    <Wrapper>
      <select
        ref={selectRef}
        onChange={e => onChangeHandler(e)}
        >
        {options.map((item, i) => (
            <option key={i} value={item}>{item}</option>
        ))} 
      </select>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 5px;
`

export default Select;