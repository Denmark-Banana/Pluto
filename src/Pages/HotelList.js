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
  const [price, setPrice] = useState({
    min: 0,
    max: 1000000,
  });

  const checkItems = ['Free WIFI', 'Free Parking', 'Free Airport Pickup'];

  const getHotelPrice = async (hotels) => {
    try {
      const filterbyIdxHotel =
        hotels && hotels.length > 0 && hotels.filter((_, idx) => idx < 4);
      const restIdxHotel =
        hotels && hotels.length > 0 && hotels.filter((_, idx) => idx >= 4);

      const ids = filterbyIdxHotel && filterbyIdxHotel.map((data) => data.id);
      const res = await api.fetchHotelPrice(ids);

      if (res.status === 200) {
        if (filterbyIdxHotel && filterbyIdxHotel.length > 0) {
          const newHotels = filterbyIdxHotel.map((hotel, idx) => ({
            ...hotel,
            price: res.data[ids[idx]],
          }));

          setHotels([...newHotels, ...restIdxHotel]);
        }
      } else {
        console.log(res.message);
        getHotelPrice(hotels);
      }
    } catch (e) {
      console.log(e.message);
      setError(e.message);
    } finally {
    }
  };

  const getHotels = async () => {
    try {
      const res = await api.fetchHotels(1, `PRICE=${price.min}:${price.max}`);
      if (res.status === 200) {
        console.log(res.data);
        setHotels(res.data);

        getHotelPrice(res.data);
      } else setError(res.message);
    } catch (e) {
      console.log(e.message);
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getHotels();
  }, []);

  return (
    <Container>
      <Filter checkItems={checkItems} price={price} />
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
                    price={hotel.price}
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
