import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const List = styled.div`
    height: 75%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: ${({theme}) => theme.font.body.family};
    font-size: 120%;
    
   

    div {
        display: flex;
        align-items: center;
        margin-bottom: 2vh
        
        
    }
    
    
    

`
export const DescLink = styled(Link)`
    color: black;
    text-decoration-line: none;

`