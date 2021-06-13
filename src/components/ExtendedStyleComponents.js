import styled from 'styled-components'
import { BasicButton } from './Buttons';

export const ColoredButton = styled(BasicButton)`
    width: 500px;
    color: white;
    background: linear-gradient(to right, blue, red);

    &:hover{
        background: transparent;
        color: blue;
    }
`;


export const VariableColoredButton = styled(BasicButton)`
    background: ${({color})=>`${color}`};
    color: white;
    border: none;
    transition: transform 0.5s ease;

    &:hover{
        transform: scale(1.1);
        background: ${({color})=>`${color}`};
    }
`;