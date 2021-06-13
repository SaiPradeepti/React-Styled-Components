import { Button } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components';

const StyledBtn = styled(Button)`
    margin-left: 2rem;
    text-transform: capitalize;
`;


const ExtendedReactComponents = () => {
    return (
        <div style={{padding: '5rem 10rem'}}>
            <Button color="primary" variant='contained'>Material UI Button</Button>
            <StyledBtn color="primary" variant='contained'>Material UI Customised Btn</StyledBtn>
        </div>
    )
}

export default ExtendedReactComponents
