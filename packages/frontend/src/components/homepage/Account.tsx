import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../atoms/Modal';
import RegisterContainer from '../../containers/RegisterContainer';
import AuthOverlay from './AuthOverlay';
import LoginContainer from "../../containers/LoginContainer";

const Container = styled.div`
    position: fixed;
    width: 100%;
    z-index: 1200;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0;
    background-color: rgba(0,0,0,0.5);
`;

const ModalContainer = styled.div`
    height: 30rem;
    width: 50rem;
    background: white;
    margin: auto auto;
    box-shadow: 0 2px 10px rgba(0,0,0,.15);
    position: relative;
    top: 30%;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    border-radius: 20px;
    overflow: hidden;
`;

const CloseButton = styled.button`
    background: transparent;
    border: none;
    position: relative;
    left: 95%;
    margin-top: 10px;
    z-index: 2000;
`;

const Account = (props) => {
    const { isOpen, setModal } = props;
    const [slide, setSlide] = useState(false);
    return (
        <Modal id="modal">
            <Container>
                <ModalContainer>
                    <CloseButton className="material-icons" onClick={() => setModal(!isOpen)}>close</CloseButton>
                    <LoginContainer state={slide}/>
                    <RegisterContainer state={slide}/>
                    <AuthOverlay state={slide} setSlide={setSlide}/>
                </ModalContainer>
            </Container>
        </Modal>
    );
};

export default Account;
