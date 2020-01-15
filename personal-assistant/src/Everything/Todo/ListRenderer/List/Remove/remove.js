import {RmvBtn} from "./styles.js"
import React from "react"


const RemoveBtn = ({id, todoList, setList, deleteTodo}) => {
    return <RmvBtn onClick={()=> setList(deleteTodo(todoList, id))}>
         X
    </RmvBtn>
}



export default RemoveBtn