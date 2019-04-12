import React from 'react';
import styled from 'styled-components';
import { svgUrl } from '../assets/index';
import { Link } from 'react-router-dom'

const Container = styled.div`
    position: absolute;
    z-index: 3;
    top: 1em;
    background: transparent;
    width: 100%;
`;

const SvgHolder = styled.img`
    height: 2em;
    margin-left: 25em;
`;

export const NavBar = () => {
    return (
        <Container>
            <Link to="/">
                <SvgHolder src={svgUrl('logo.svg')}/>
            </Link>
        </Container>
    )
}