import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const StyledLink = styled(Link)`
    position: relative;
    top: 4%;
    width: 10vw;
    button {
        font-family: ${({theme}) => theme.font.body.family};
            background-color: ${({theme}) => theme.layout.color.inputBackground};
            border: ${({theme}) => theme.layout.border.border};
            outline: none;

            &:hover {
                        color: black;
                        border: 2px solid ${({theme}) => theme.effects.button.hover.borderColor};
                        border-radius: ${({theme}) => theme.layout.border.borderRadius};
                    }
            &:active {
                border: 2px solid black;
                background-color: ${({theme}) => theme.effects.button.active.backGroundColor};
                box-shadow: ${({theme}) => theme.effects.button.active.boxShadow};
            }
        }

`