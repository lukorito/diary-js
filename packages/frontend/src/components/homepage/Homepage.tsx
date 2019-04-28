import React from 'react';
import styled from 'styled-components';
import { BottomParallax } from './BottomParallax';
import { Footer } from './Footer';
import { Info } from './Info';
import { MidDescription } from './MidDescription';
import NavBar from './NavBar';
import { TopBar } from './Top';

const Container = styled.div`
    padding: 0;
    display: flex;
    flex-direction: column;
`;

class Homepage extends React.Component <{}> {
    public render() {
        return (
            <Container>
                <NavBar/>
                <TopBar/>
                <MidDescription/>
                <Info/>
                <BottomParallax/>
                <Footer/>
            </Container>
        );
    }
}

export default Homepage;
