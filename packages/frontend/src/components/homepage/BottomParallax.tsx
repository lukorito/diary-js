import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../../assets/images/bottom.jpg';


const Container = styled.div`
    width: 100%;
    height: 500px;
    display: block;
    background-size: 100%;
    overflow: hidden;
`;

const GradientContainer = styled.div`
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;

     &::after {
        background-size: 2000px;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: block;
        z-index: 1;
        content: "";
        opacity: .7;
        background: radial-gradient(ellipse at center,  #1e5799 0%,rgba(54, 151, 142, 0.8)  0%,#0C526C 100%,#3d7eaa 100%,#182848 100%,#6e48aa 100%,#6e48aa 100%);
     }
`;

const ImageContainer = styled.div`
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
`;

const Image = styled.img`
    margin-top: 0;
    vertical-align: middle;
    border: 0;
    width: 100%;
    max-height: auto;
`;

const ContentContainer = styled.div`
    height: 100%;
    position: absolute;
    z-index: 2;
    top: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items:center;
    justify-content: center;
`;

const TextContainer = styled.div`
    color: #fff;
`;



// Todo
// - Refactor this component to match TOP
export const BottomParallax = () => {
    return (
        <Container className='wrapper'>
            <ImageContainer>
                <GradientContainer>
                    <Image src={backgroundImage}/>
                    <ContentContainer className='container'>
                       <TextContainer>
                           <h1>This application is awesome</h1>
                       </TextContainer>
                    </ContentContainer>
                </GradientContainer>
            </ImageContainer> 
        </Container>
    )
}
