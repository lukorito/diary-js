import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../../assets/images/bottom.jpg';
import { svgUrl } from '../../assets/index';

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
    box-sizing: border-box;
`;

const Image = styled.img`
    margin-top: 0;
    vertical-align: middle;
    border: 0;
    width: 100%;
    max-height: auto;
`;

const SvgHolder = styled.img`
    height: 20em;
`;

const SvgContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    margin-top: 250px;
`;

const ContentContainer = styled.div`
    position: absolute;
    z-index: 2;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
`;

const Row = styled.div`
    margin-right: -15px;
    margin-left: -15px;
`;

const DescriptionContainer = styled.div`
    margin-top: 250px;
    color: white;
    padding: 5px;
    margin-right: 100px;
`;

const Description = styled.div`
    font-size: 40px;
    font-weight: 200;
    text-shadow: 0 1px 5px rgba(0,0,0,0.2);
    margin-left: 0;
`;

const StyledDescription = styled.h5`
    font-weight: 400;
     font-size: 18px;
     padding-top: 50px;
`;

export const TopBar = () => {
    return (
        <Container className="wrapper">
            <ImageContainer>
                <GradientContainer>
                    <Image src={backgroundImage}/>
                    <ContentContainer className="container">
                        <Row className="row">
                            <SvgContainer className="col-md-5 hidden-xs">
                                <SvgHolder src={svgUrl('typewriter.svg')}/>
                            </SvgContainer>
                            <div className="col-md-5 hidden-xs">
                                <DescriptionContainer>
                                    <Description>
                                        <h2>Welcome to My Diary</h2>
                                        <StyledDescription>MyDiary is an online journal where users can pen down their thoughts and feelings.</StyledDescription>
                                    </Description>
                                </DescriptionContainer>
                            </div>
                        </Row>
                    </ContentContainer>
                </GradientContainer>
            </ImageContainer>
        </Container>
    );
};
