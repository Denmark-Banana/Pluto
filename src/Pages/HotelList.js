import React, { useState, useEffect } from 'react';
import { api } from '../api';
import styled from 'styled-components';

const Container = styled.div``;

export default () => {
  useEffect(() => {
    async function getHotels() {
      const response = await api.fetchHotels(1, `PRICE=0:100000`);
      console.log(response);
    }

    getHotels();
  }, []);

  return <Container>HotelList Page</Container>;
};
