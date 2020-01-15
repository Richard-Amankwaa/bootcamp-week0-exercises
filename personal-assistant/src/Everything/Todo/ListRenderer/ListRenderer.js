import Search from './Search/Search.js'
import Todos from'./List/List'
import ListPlaceHolder from './EmptyListPlaceHolder'
import React, {useState} from 'react'

const TodoList = ({todoList, setList, deleteTodo}) => {
  const [query, setQuery] = useState("")
  console.log('TODOLIST',todoList)
    if (Object.keys(todoList).length > 0) {
      return <div><Search setQuery={setQuery} todoList={todoList}></Search> 
      <Todos todoList={todoList} setList={setList} query={query} deleteTodo={deleteTodo}/>
      </div>
    }else{
      return <ListPlaceHolder/>
    }
    
  }

export default TodoList