import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5em;
`;

export const Footer = () => {
    return (
        <Container>
            <p>&copy; Diary 2019</p>
        </Container>
    )
}