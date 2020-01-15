import React from 'react'
import {Container} from './styles'
import TodoLink from './GoToTodo/index'
import HomeLink from './GoToHome'


const NavBar = () => (
    <Container>
        <HomeLink />
        <TodoLink />
    </Container>
)


export default NavBar