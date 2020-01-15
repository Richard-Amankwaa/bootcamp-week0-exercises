import React, {useState} from 'react'
import {useParams} from 'react-router-dom'
import EditTodo from './AddTodo/AddTodo.js'
import EditDescription from './AddDescription'
import MakeTodo from './SubmitTodo'
import {Container} from './styles'

const EditTodoList = ({todoList, setList, deleteTodo}) => {
     const {id} = useParams();
     const [todo, setTodo] = useState({todo: todoList[id].todo, description: todoList[id].description})
     

     return <Container><EditTodo id={id} todoList={todoList} todo={todo} setTodo={setTodo}/>
            <EditDescription id={id} todoList={todoList} todo={todo} setTodo={setTodo}/>
            <MakeTodo id={id} todoList={todoList} todo={todo} setList={setList} deleteTodo={deleteTodo}/>
            </Container>

}




export default EditTodoList