import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    background-color: ${props => props.primary ? '#109cff' : '#d3d3d3'};
    color: ${props => props.primary ? 'white' : 'black'};
    border-color: ${props => props.primary ? '#109cff' : 'white'};
    padding: 8px 16px;
    border-width: 2px;
    margin-bottom: 0;
    border: 1px solid transparent;
    border-radius: 4px;
`;

export default Button;
