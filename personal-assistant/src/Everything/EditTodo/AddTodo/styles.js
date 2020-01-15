import styled from 'styled-components'


export const StyledInput = styled.input`
    width: 50%;
    height: 8%;
    font-size: 130%;
    text-align: center;

    font-family: ${({theme}) => theme.font.body.family};
    background-color: ${({theme}) => theme.layout.color.inputBackground};
    border: ${({theme}) => theme.layout.border.border};

`