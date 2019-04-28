import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { svgUrl } from '../../assets/index';
import Account from './Account';

const Container = styled.div`
    position: absolute;
    z-index: 3;
    top: 1em;
    background: transparent;
    width: 100%;
`;

const SvgHolder = styled.img`
    height: 2em;
`;

const NavItemContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 46%;
`;

const  Text = styled.button`
    float: right;
    background-color: transparent;
    color: #fff;
    border: none;

    :hover {
        color: 	#d3d3d3;
        text-decoration: none;
    }
`;

const NavBar = () => {
    const [modal, setModal] = useState(false);
    return (
        <Container>
            <NavItemContainer>
                <Link to="/">
                    <SvgHolder src={svgUrl('logo.svg')}/>
                </Link>
                <Text onClick={() => setModal(!modal)}>Account</Text>
            </NavItemContainer>
            {modal ? <Account isOpen={modal} setModal={setModal}/> : null}
        </Container>
    );
};

export default NavBar;
