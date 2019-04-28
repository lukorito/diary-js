import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
    left:0;
    width: 50%;
    z-index: 1;
    transform: ${props => props.state ? 'translateX(100%)' : ''};
    `;

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Heading = styled.h1`
    padding: 30px;
    margin-top: 2.5em;
`;

const Input = styled.input`
    
`;

const Login = (props) => {
    const {state} = props;
    return (
        <Container state={state}>
            <FormContainer>
                <Heading>Sign in</Heading>

            </FormContainer>
        </Container>
    );
};

export default Login;
