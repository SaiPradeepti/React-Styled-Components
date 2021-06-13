import React from 'react'
import styled from 'styled-components'
import Title from './Title'
import { BasicButton } from './Buttons'

const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Button = () => {
    return (
        <Body>
            <Title>styled components</Title>
            <BasicButton onClick={()=>alert("You've clicked a styled button component")}>click here</BasicButton>
        </Body>
    )
}

export default Button
