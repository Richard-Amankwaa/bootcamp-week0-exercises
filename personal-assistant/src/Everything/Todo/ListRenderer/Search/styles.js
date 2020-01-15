import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 10%
    input {
        font-family: ${({theme}) => theme.font.body.family};
        background-color: ${({theme}) => theme.layout.color.inputBackground};
        border: ${({theme}) => theme.layout.border.border};
        font-size: 200%;
        width: 100vw;
        height: 100%;
    }
`
