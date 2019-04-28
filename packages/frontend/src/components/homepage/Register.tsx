import React from 'react';
import styled, {css, keyframes} from 'styled-components';

const Container = styled.div`
    z-index: 1;
    position: absolute;
	top: 0;
    width: 50%;
	height: 100%;
	transition: all 0.6s ease-in-out;
    transform: ${(props) => props.state ? 'translateX(100%)' : ''};
    opacity: ${(props) => props.state ? 1 : 0};
    z-index: ${(props) => props.state ? 1 : 5};
    background-color: #fff;
    animation: ${(props) => props.state ? css`${show}` : ''};
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
const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
`;
const Register = (props) => {
    const {state} = props;
    return(
        <Container state={state}>
            <FormContainer>
                <h1>Create and Account</h1>
                <input type="text" name="" id=""/>
            </FormContainer>
            <h1>Hi</h1>
        </Container>
    );
};

export default Register;
