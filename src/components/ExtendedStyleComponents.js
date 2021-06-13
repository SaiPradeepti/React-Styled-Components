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