import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.li`
  display: flex;
  margin-bottom: 30px;
  background-color: #ffffff;
`;

const TitleContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
`;

const TitleText = styled.span`
  font-size: 15px;
  font-weight: bold;
`;

const ReviewContent = styled.div``;

const ReviewCountText = styled.span`
  margin-right: 5px;
`;
const ReviewScore = styled.span`
  font-size: 9px;
  background-color: #060CAB;
  color: #777777;
  width: 15px;
  height: 15px;
  border-radius: 20%;
  padding: 4px;
`;

const Image = styled.div`
  background-image: url(${(props) => props.bgUrl});
  width: 210px;
  height: 150px;
  background-size: cover;
  background-position: center center;
  cursor: pointer;
`;

const Content = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
`;

const FreeService = styled.div`
  margin: 10px;
`;
const ServiceText = styled.span`
  display: inline-block;
  margin-right: 5px;
  color: #1fbc41;
  border: 1px solid #1fbc41;
`;
const RateText = styled.span`
  margin: 10px;
`;
const PriceText = styled.span`
  position: absolute;
  background-color: #479AFC;
  color: white;
  right: 0px;
  bottom: 0px;
  width: 80px;
  height:20px;
  padding: 5px 10px;
`;

const Hotel = ({
  id,
  name,
  freeServices,
  imageUrl,
  rate,
  reviewScore,
  totalReviewCount,
  price
}) => {
  return (
    <Container>
      <Image bgUrl={imageUrl}></Image>
      <Content>
        <TitleContent>
          <TitleText>{name}</TitleText>
          <ReviewContent>
            <ReviewCountText>{`${totalReviewCount}개의 이용후기`}</ReviewCountText>
            <ReviewScore>{reviewScore}</ReviewScore>
          </ReviewContent>
        </TitleContent>
        <FreeService>
          {freeServices &&
            freeServices.length > 0 &&
            freeServices.map((service, idx) => (
              <ServiceText key={idx}>{service}</ServiceText>
            ))}
        </FreeService>
        <RateText>{`${rate}성급 호텔`}</RateText>
        <PriceText>{price? `${price} 원~` : 'loading...'}</PriceText>
      </Content>
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
