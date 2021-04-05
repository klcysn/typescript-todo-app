import React, { useState } from "react"

interface Todo {
    text: string;
    completed: boolean;
}



const TodoListItem: React.FC<Todo> = ({text, completed}) =>{
    const [check, setCheck] = useState(false)
    const handleClick = (event: React.MouseEvent<HTMLInputElement>) =>{
        setCheck(event.currentTarget.checked)
    }
    return(
        <li>
            <label style={{textDecoration: check ? "line-through" : "none"}}>{text}</label>
            <input type="checkbox" onClick={handleClick}/>            
        </li>
    )
}

export default TodoListItem