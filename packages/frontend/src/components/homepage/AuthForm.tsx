import React from 'react';
import styled from 'styled-components';
import Login from './Login';

const Container = styled.div`
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    position: relative;
    overflow: hidden;
    width: 768px;
    max-width: 100%;
    min-height: 480px;
`;
const AuthForm = () => {
    return(
        <Container>
            <Login/>

        </Container>
    )
}

export default AuthForm;