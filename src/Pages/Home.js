import React from 'react';
import styled from 'styled-components';
import Emoji from '../Components/Emoji';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const WallPaper = styled.div`
  background-image: url('https://grepp-programmers-challenges.s3.ap-northeast-2.amazonaws.com/2020-myrealtrip/image/hotel_8-min.jpg');
  background-size: cover;
  filter: blur(5px);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const Content = styled.div`
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  z-index: 1;
  color: #fff;
  font-size: 5rem;
`;

export default () => {
  return (
    <Container>
      <WallPaper /> */}
      <Content>
        Hello, My Hotels!{' '}
        <Link to="/hotels">
          <Emoji symbol="🏨" label="Hotel" />
        </Link>
      </Content>
    </Container>
  );
};
