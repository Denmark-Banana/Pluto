import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InputRange from 'react-input-range';
import styled from 'styled-components';
import 'react-input-range/lib/css/index.css';

const Container = styled.div`
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.span`
  margin-bottom: ${(props) => (props.isRange ? '28px' : '10px')};
`;

const Form = styled.div``;

const Item = styled.div`
  display: block;
  margin-bottom: 5px;
`;

const InputText = styled.span`
`;
const Input = styled.input``;


const FilterItem = ({ type, label, checkItems }) => {
  const [value, setValue] = useState({
    min: 0,
    max: 1000000,
  });
  const isRange = type === 'range';
  const isCheck = type === 'check';
  return (
    <Container>
      {label && <Label isRange={isRange}>{label}</Label>}
      {isRange && (
        <InputRange
          minValue={0}
          maxValue={1000000}
          value={value}
          step={1000}
          formatLabel={(value) =>
            value === 1000000 ? '1,000,000+' : value.toString()
          }
          onChange={(value) => setValue(value)}
        />
      )}
      {isCheck && checkItems && checkItems.length > 0 && (
        <Form>
          {checkItems.map((item, idx) => (
            <Item key={idx}>
              <Input type="checkbox" />
              <InputText>{item}</InputText>
            </Item>
          ))}
        </Form>
      )}
    </Container>
  );
};

FilterItem.propTypes = {
  label: PropTypes.string,
};

export default FilterItem;
