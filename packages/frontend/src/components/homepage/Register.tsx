import React, { useState } from "react";
import styled, {css, keyframes} from 'styled-components';
import Button from '../atoms/Button';
import FormContainer from '../atoms/forms/FormContainer';
import Input from '../atoms/Input';

//state management
import { connect } from 'react-redux'
import { registerUser } from '../../actions/index';
import { iUser } from "../../types/User";

const Container = styled.div`
    z-index: 1;
    position: absolute;
	  top: 0;
    width: 50%;
	  height: 100%;
	  transition: all 0.6s ease-in-out;
    transform: ${(props) => props.state ? 'translateX(100%)' : ''};
    opacity: ${(props) => props.state ? 1 : 0};
    z-index: ${(props) => props.state ? 5 : 1};
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
const Heading = styled.h2`
    padding: 30px;
    margin-top: 2.5em;
    padding-top: 5px;
`;

const Register = (props) => {
    const {state, setSlide} = props;
    const [firstname, setFirstName] = useState('');
    const [secondname, setSecondName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const user = {
        firstname,
        secondname,
        email,
        password,
    };

    const handleRegister = (user: iUser) => (e) => {
        e.preventDefault();
        props.registerUser(user);
        //TODO
        // on success
        // setSlide(!state)
    };

    return(
        <Container state={state}>
            <FormContainer>
                <Heading>Create an Account</Heading>
                <Input placeholder="First Name" type="text" name="firstName" value={firstname} onChange={(e) => setFirstName(e.target.value)}/>
                <Input placeholder="Second Name" type="text" name="secondName" value={secondname} onChange={(e) => setSecondName(e.target.value)}/>
                <Input placeholder="Email" type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <Input placeholder="Password" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <Button primary onClick={handleRegister(user)}>Sign up</Button>
            </FormContainer>
        </Container>
    );
};

export default Register;
