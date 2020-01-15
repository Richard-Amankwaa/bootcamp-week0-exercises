import React from 'react'
import {StyledInput} from './styles'

const EditTodo = ({id, todoList, todo, setTodo}) => (
    <StyledInput placeholder="TODO" defaultValue = {todoList[id].todo} onChange={e => setTodo({ todo: e.target.value, description: todo.description})} />
)

export default EditTodo

