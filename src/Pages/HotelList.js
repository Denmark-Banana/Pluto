import React, { useState, useEffect } from 'react';
import { api } from '../api';
import styled from 'styled-components';
import Hotel from '../Components/Hotel';
import Filter from '../Components/Filter';
import Recent from '../Components/Recent';

const Container = styled.div`
  display: flex;
  padding: 20px;
`;

const Result = styled.div`
  display: flex;
  flex-direction: column;
`;

export default () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    async function getHotels() {
      const response = await api.fetchHotels(1, `PRICE=0:100000`);
      console.log(response);
      setHotels(response);
      console.log(hotels);
    }

    getHotels();
  }, []);

  return (
    <Container>
      <Filter />
      <Result>
        <Recent />
        {hotels.map((hotel) => (
          <Hotel
            key={hotel.key}
            id={hotel.id}
            name={hotel.name}
            freeServices={hotel.freeServices}
            imageUrl={hotel.imageUrl}
            rate={hotel.rate}
            reviewScore={hotel.reviewScore}
            totalReviewCount={hotel.totalReviewCount}
          />
        ))}
      </Result>
    </Container>
  );
};
