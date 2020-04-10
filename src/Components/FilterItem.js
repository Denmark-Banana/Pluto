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
  margin-bottom: 28px;
`;

const FilterItem = ({ label }) => {
  const [value, setValue] = useState({
    min: 0,
    max: 1000000,
  });
  return (
    <Container>
      <Label>{label}</Label>
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
    </Container>
  );
};

FilterItem.propTypes = {
  label: PropTypes.string,
};

export default FilterItem;
