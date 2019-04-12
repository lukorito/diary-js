import React from 'react';
import styled from 'styled-components';
import { TopBar } from './Top';
import { MidDescription } from './MidDescription'
import { NavBar } from './NavBar';

const Container = styled.div`
    padding: 0;
    display: flex;
    flex-direction: column;
`;

class Homepage extends React.Component <{}> {
    render () {
        return (
            <Container>
                <NavBar/>
                <TopBar/>
                <MidDescription/>
                <h2>This is a sample</h2>
            </Container>
        )
    }
}

export default Homepage;
