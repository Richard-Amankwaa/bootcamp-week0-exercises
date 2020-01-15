import styled from 'styled-components'

export const Container = styled.div`
    width: 100;
    height: 5%;
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 8.2vh;
    left: 25vw;

    input {
        font-family: ${({theme}) => theme.font.body.family};
        background-color: rgba(60, 60, 60, 0.1);
        border-radius: ${({theme}) => theme.layout.border.borderRadius};
        
        font-size: 100%;
        width: 40vw;
        height: 100%
    }
    button {
        border-radius: ${({theme}) => theme.layout.border.borderRadius};
        width: 10vw;
        height: 100%;
    }
`
    