import React from 'react';
import { createPortal } from 'react-dom';
import usePortal from '../hooks/portal.hooks';



const Modal = ({id , children }) => {
    const element = usePortal(id);
    return createPortal(
        children,
        element,
    );
};

export default Modal;
