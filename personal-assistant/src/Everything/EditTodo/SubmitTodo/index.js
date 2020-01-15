import React from 'react'
import {StyledLink} from './styles'



const MakeTodo = ({id, todoList, todo, setList, deleteTodo}) => {
    return <StyledLink to="/todo">
        <button onClick={() => setList(changeTodo(todoList, id, todo, deleteTodo))}>Create Todo</button>
    </StyledLink>

}

const changeTodo = (todoList, id, todo, deleteTodo) => {
    if (todo.todo) {
        todoList[id] = todo
        return todoList
    }else{
        return deleteTodo
    }
    
    
}

export default MakeTodo