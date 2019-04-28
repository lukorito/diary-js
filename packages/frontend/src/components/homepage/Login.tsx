import React from 'react';
import styled from 'styled-components';
import Button from '../atoms/Button';
import FormContainer from '../atoms/forms/FormContainer';
import Input from '../atoms/Input';

const Container = styled.div`
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
    left:0;
    width: 50%;
    z-index: 2;
    transform: ${(props) => props.state ? 'translateX(100%)' : ''};
    `;

const Heading = styled.h2`
    padding: 30px;
    margin-top: 2.5em;
`;



const Login = (props) => {
    const {state} = props;
    return (
        <Container state={state}>
            <FormContainer>
                <Heading>Sign in</Heading>
                <Input type="text" placeholder="Email" name="email"/>
                <Input type="password" placeholder="Password" name="password"/>
                <Button primary>Sign in</Button>
            </FormContainer>
        </Container>
    );
};

export default Login;
