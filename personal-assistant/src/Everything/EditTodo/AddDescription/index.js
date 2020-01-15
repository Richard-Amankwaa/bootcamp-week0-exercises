import React from 'react'
import {StyledInput} from './styles'

const EditDescription = ({id, todoList, todo, setTodo}) => (
    <StyledInput placeholder="DESCRIPTION" type="text" defaultValue={todoList[id].description} onChange={e => setTodo({todo: todo.todo, description: e.target.value})} />
)

export default EditDescription