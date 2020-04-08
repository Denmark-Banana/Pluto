import React, { useState } from 'react'
import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    flex-direction: column;
    padding-right: 10vw;

    width: 33vw;
`;

const Title = styled.span`
    margin-bottom: 10px;
`;

const Content = styled.div`
    background-color: #FFFFFF;
    height: 70vh;
`;

const Filter = () => {
    const [value, setValue] = useState({
    })
    
    return (
        <Container>
            <Title>Filter</Title>
            <Content></Content>
        </Container>
    );
}

export default Filter;