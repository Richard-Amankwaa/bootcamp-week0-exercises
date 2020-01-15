import styled from 'styled-components'

export const RmvBtn = styled.button`
    
    height: 1.5em;
    position: absolute;
    right: 10vw;

    background-color: rgb(165, 60, 60);
    border: rgba(60, 60, 60, 0.1);
    border-radius: ${({theme}) => theme.layout.border.borderRadius};
    color: white
    
    
`