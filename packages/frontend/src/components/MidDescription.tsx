import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    padding: 50px 0;
    background-color: #eee;
    color: #333;
    height: 20em;
    text-align: center;
`;

const TextContainer = styled.div`
    color: #333;
    margin-top: 3em;

`;

const Text = styled.p`
    font-size: 18px;
    font-weight: 200;
    line-height: 28px;
    margin-top: 2em;
`;

export const MidDescription = () => {
    return (
        <Container>            
            <TextContainer>
                <h4>Lorem Ipsum</h4>
                <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus doloribus blanditiis aspernatur maxime tempora reiciendis quos, a nemo dicta ipsa voluptatum magni aliquid consectetur nam, rem, quod suscipit! Quae, ipsam?</Text>
            </TextContainer>

        </Container>
    )
}
