import React from 'react';
import styled from 'styled-components';
import macImage from '../../assets/images/mac.png';

const Wrapper = styled.div`
    height: 30em;
`;

const Container = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
`;

const TextContainer = styled.div`
    width: 50%;
    padding: 30px;
    text-align: center;
    line-height: 3;
`;

const Image = styled.img`
    height: 30em;
`;

export const Info = () => {
    return (
        <Wrapper>
            <Container>
                <TextContainer>
                    <h2>Lorem Ipsum</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt a magni molestias quam fugit consequuntur, culpa provident sed placeat obcaecati ab, distinctio, minima molestiae asperiores suscipit et voluptates? Perspiciatis, corporis?</p>
                </TextContainer>
                <Image src={macImage}></Image>
            </Container>
        </Wrapper>
    )
};