import React from 'react'
import RemoveBtn from './Remove/remove.js'
import {List, DescLink} from './styles.js'


const Todos = ({todoList, setList, query, deleteTodo}) => {
    
    return <List>
        {Object.keys(todoList).filter(id => todoList[id].todo.startsWith(query)).map(id=> 
        <div key={id}><DescLink to={`/todo/${id}`} DescLink>{todoList[id].todo}</DescLink><RemoveBtn id={id} todoList={todoList} setList={setList} deleteTodo={deleteTodo}/>
</div>
        )}
        </List>
}
// 
export default Todos