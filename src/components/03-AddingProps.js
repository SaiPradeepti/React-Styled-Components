import React from 'react'
import styled from 'styled-components'
import Title from './Title'
import { BasicButton } from './Buttons'
import { ColoredButton } from './ExtendedStyleComponents'

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const AddingProps = () => {
    return (
        <Body>
            <Title>styled components</Title>
            <BasicButton onClick={()=>alert("You've clicked a styled button component")}>click here</BasicButton>
            <BasicButton special>hi</BasicButton>
            <ColoredButton>Hello</ColoredButton>
        </Body>
    )
}

export default AddingProps
