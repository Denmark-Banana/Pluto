import React from 'react';
import styled from 'styled-components';
import FilterItem from 'Components/FilterItem';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 7vw;

  width: 25vw;
`;

const Title = styled.span`
  margin-bottom: 10px;
`;

const Content = styled.div`
  padding: 40px;
  background-color: #ffffff;
  height: 70vh;
  display: flex;
  flex-direction: column;
`;

const Filter = () => {
  return (
    <Container>
      <Title>Filter</Title>
      <Content>
        <FilterItem label="1박당 요금"/>
        <FilterItem label="리뷰 점수"/>
      </Content>
    </Container>
  );
};

export default Filter;
