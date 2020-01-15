import {Container} from './styles'
import React, {useState} from 'react'
import nanoid from 'nanoid'

const AddBtn = ({todoList, setList}) => {
    const [todo, setTodo] = useState("");
    return <Container>
        <div>
            <input id='add' type="text" value = {todo} onChange={e => setTodo(e.target.value)}/>
            <button type="button" onClick={() => setList({...todoList, [nanoid()]: { todo, description: ''}})}>Add Todo</button>
        </div>
    </Container>
    
}


export default AddBtn