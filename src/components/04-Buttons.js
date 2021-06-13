import React from 'react'
import { VariableColoredButton } from './ExtendedStyleComponents'
import { Body } from './03-AddingProps'

const ExtendedStyleComponents = () => {
    return (
        <Body>
            <VariableColoredButton color='red'>Red Button</VariableColoredButton>
            <VariableColoredButton color='green'>green Button</VariableColoredButton>
            <VariableColoredButton color='blue'>blue Button</VariableColoredButton>
            <VariableColoredButton color='pink'>pink Button</VariableColoredButton>
            <VariableColoredButton color='black'>black Button</VariableColoredButton>
            <VariableColoredButton color='maroon'>maroon Button</VariableColoredButton>
        </Body>
    )
}

export default ExtendedStyleComponents
