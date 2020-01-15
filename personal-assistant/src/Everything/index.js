import React, {useState} from 'react'
import TodoPgRender from './Todo/TodoPg'
import EditTodoList from './EditTodo'
import {deleteFromObj} from '../utils/utils'
import Components from './Components'
import {Container} from './styles'

import { Switch, Route } from 'react-router-dom'








const Everything = () => {
  const [todoList, setList] = useState({});
  
  return <Container>

      <Components />

        <Switch>
          
          
          <Route path='/todo/:id'>
            <EditTodoList todoList={todoList} setList={setList} deleteTodo={deleteFromObj}/>
          </Route>
          <Route path='/todo'>
              <TodoPgRender todoList={todoList} setList={setList} deleteTodo={deleteFromObj}/>
          </Route>
        </Switch>

        </Container>

  
    
}

export default Everything
