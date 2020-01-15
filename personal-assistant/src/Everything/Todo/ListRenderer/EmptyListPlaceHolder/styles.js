import styled from 'styled-components'


export const Substitute = styled.div`
    display: flex;
    flex-flow: column wrap;
    height: 140%

    
    img {
        max-height: 50%;
    }
    
    
    p {
        align-self: center;
        font-family: ${({theme}) => theme.font.body.family};
        background-color: ${({theme}) => theme.layout.color.inputBackground};
        font-size: 120%
    }
    `