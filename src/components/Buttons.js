import styled from 'styled-components'

export const BasicButton = styled.button`
    background: none;
    color: ${({special})=>(special ? 'red' : 'blue')};
    border: 1px solid blue;
    border-radius: 10px;
    outline: none;
    padding: 0.5rem 3rem;
    text-transform: capitalize;
    font-size: 1.5rem;
    font-weight: 700;
    margin: 1rem auto;
    width: 300px;
    cursor: pointer;

    &:hover{
        background: blue;
        color: white;
    }
`;