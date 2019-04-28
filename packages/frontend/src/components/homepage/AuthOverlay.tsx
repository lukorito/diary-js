import React, {useState} from 'react';
import styled, {keyframes} from 'styled-components';
import Button from '../atoms/Button';

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.6s ease-in-out;
    z-index: 100;
    transform: ${(props) => props.state ? 'translateX(-100%)' : ''};
`;

const Overlay = styled.div`
    background: rgba(54, 151, 142, 0.8);
	background: -webkit-linear-gradient(to right, rgba(54, 151, 142, 0.8), #0C526C);
	background: linear-gradient(to right, rgba(54, 151, 142, 0.8), #0C526C);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: 0 0;
	color: #FFFFFF;
	position: relative;
	left: -100%;
	height: 100%;
	width: 200%;
    transform: ${(props) => props.state ? 'translateX(50%)' : 'translateX(0)'};
	transition: transform 0.6s ease-in-out;
`;

const OverlayPanel = styled.div`
    position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 40px;
	text-align: center;
	top: 0;
	height: 100%;
	width: 50%;
	transition: transform 0.6s ease-in-out;
`;

const OverlayPanelLeft = styled(OverlayPanel)`
    transform: ${(props) => props.state ? 'translateX(0%)' : 'translateX(-20%)'};
    display: flex;
`;

const OverlayPanelRight = styled(OverlayPanel)`
    display: flex;
    right: 0;
	transform: ${(props) => props.state ? 'translateX(20%)' : 'translateX(0%)'};
    h1 {
        font-weight: 400;
    }
`;

const show = keyframes`
    0%, 49.99% {
		opacity: 0;
		z-index: 1;
	}
	50%, 100% {
		opacity: 1;
		z-index: 5;
	}
`;

const AuthOverlay = (props) => {
    const {state, setSlide} = props;

    const handleSlide = (state: boolean) => () => {
        setSlide(!state);
    };

    return(
        <Container state={state}>
            <Overlay state={state}>
                <OverlayPanelLeft state={state}>
                    <h2>Welcome Back</h2>
                    <p>Click Sign In to enter if you are a returning user</p>
                    <Button onClick={handleSlide(state)}>Sign in</Button>
                </OverlayPanelLeft>
                <OverlayPanelRight>
                    <h2>Hello Friend</h2>
                    <p>Click sign up if you are a new user</p>
                    <Button onClick={handleSlide(state)}>Sign up</Button>
                </OverlayPanelRight>
            </Overlay>
        </Container>
    );
};

export default AuthOverlay;
