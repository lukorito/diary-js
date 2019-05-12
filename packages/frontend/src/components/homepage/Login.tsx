import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import Button from '../atoms/Button';
import FormContainer from '../atoms/forms/FormContainer';
import Input from '../atoms/Input';
import { withRouter } from 'react-router'

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
    const {state, success} = props;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const user = {email, password};

    useEffect(() => {
      if(success){
        props.history.push('/user');
      }
    }, [success]);

    const handleSubmit = (user) => async (e) => {
      e.preventDefault();
      await props.loginUser(user);
    };
    return (
        <Container state={state}>
            <FormContainer>
                <Heading>Sign in</Heading>
                <Input type="text" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <Input type="password" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <Button primary onClick={handleSubmit(user)}>Sign in</Button>
            </FormContainer>
        </Container>
    );
};


export default withRouter(Login);
