import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  font-size: 25px;
`;

export default () => (
  <Container>
    <span role="img" aria-label="loading">
      Loading...⏰
    </span>
  </Container>
);
