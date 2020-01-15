
import AddBtn from './AddBtn/AddBtn.js'
import TodoList from './ListRenderer/ListRenderer'
import React from 'react'
import {TodoPg} from './styles.js'

const TodoPgRender = ({todoList, setList, deleteTodo}) => {
    
    
    return <TodoPg>
            
            <TodoList todoList={todoList} setList={setList} deleteTodo={deleteTodo}/>
            <AddBtn todoList={todoList} setList={setList} />
        </TodoPg>

}

export default TodoPgRender