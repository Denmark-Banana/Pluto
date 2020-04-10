import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
  margin-bottom: 30px;
`;

const Title = styled.span`
  margin-bottom: 10px;
`;

const Content = styled.div`
  background-color: #ffffff;
  height: 50px;
`;

const Recent = () => {

  return (
    <Container>
      <Title>Recent</Title>
      <Content></Content>
    </Container>
  );
};

export default Recent;
