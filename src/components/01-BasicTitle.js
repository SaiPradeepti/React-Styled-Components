import React from 'react'
import styled from "styled-components";

// tagged template literal
const Title = styled.h1`
  text-align: center;
  padding: 3rem;
  color: #222;
  text-transform: capitalize;
  text-decoration: underline;
`;

const BasicTitle = () => {
    return (
        <div>      
          <Title>styled components</Title>
          <Title>reusing styled components</Title>
        </div>
    )
}

export default BasicTitle
