import React, { useState, useEffect } from 'react';
import { api } from 'api';
import styled from 'styled-components';
import Hotel from 'Components/Hotel';
import Filter from 'Components/Filter';
import Recent from 'Components/Recent';
import Loader from 'Components/Loader';
import Message from 'Components/Message';

const Container = styled.div`
  display: flex;
  padding: 20px;
`;

const Result = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div``;

const List = styled.ul``;

export default () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function getHotels() {
      try {
        const response = await api.fetchHotels(1, `PRICE=0:100000`);
        console.log(response);
        if(response.message)
          setError(response.message);
        else
          setHotels(response);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }

    getHotels();
  }, []);

  return (
    <Container>
      <Filter />
      <Result>
        <Recent />
        {loading ? (
          <Loader />
        ) : (
          <Content>
            {hotels && hotels.length > 0 && (
              <List>
                {hotels.map((hotel) => (
                  <Hotel
                    key={hotel.id}
                    id={hotel.id}
                    name={hotel.name}
                    freeServices={hotel.freeServices}
                    imageUrl={hotel.imageUrl}
                    rate={hotel.rate}
                    reviewScore={hotel.reviewScore}
                    totalReviewCount={hotel.totalReviewCount}
                  />
                ))}
              </List>
            )}
            {error && <Message text={error} color="#e74c3c" />}
          </Content>
        )}
      </Result>
    </Container>
  );
};
