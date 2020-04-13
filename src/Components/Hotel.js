import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.li`
  display: flex;
  margin-bottom: 30px;
  background-color: #ffffff;
`;

const Title = styled.span``;

const Image = styled.div`
  background-image: url(${(props) => props.bgUrl});
  width: 160px;
  height: 120px;
  background-size: cover;
  background-position: center center;
  cursor: pointer;
`;

const Hotel = ({
  id,
  name,
  freeServices,
  imageUrl,
  rate,
  reviewScore,
  totalReviewCount,
}) => {


  return (
    <Container>
      <Image bgUrl={imageUrl}></Image>
      <Title>Hotel</Title>
    </Container>
  );
};

Hotel.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  freeServices: PropTypes.array.isRequired,
  imageUrl: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  reviewScore: PropTypes.number.isRequired,
  totalReviewCount: PropTypes.number.isRequired,
};

export default Hotel;
