import styled from 'styled-components'


export const StyledInput = styled.textarea`
    width: 50%;
    height: 70%;
    font-size: 130%;
    position: relative;
    top: 2%;
    line-height: 50px;
    
    font-family: ${({theme}) => theme.font.body.family};
    background-color: ${({theme}) => theme.layout.color.inputBackground};
    border: ${({theme}) => theme.layout.border.border};

`