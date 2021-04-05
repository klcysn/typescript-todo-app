import React, { useState } from 'react';
import './App.css';
import TodoListItem from "./TodoListItem"


function App() {
  const [todoList, setTodoList] = useState([{text: "yemek", completed: false}])
  const [todo, setTodo] = useState<string>("")

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    event.preventDefault()
    setTodo(event.target.value)
  }
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) =>{
    event.preventDefault()
    setTodoList([{text: todo, completed: false}, ...todoList])
  }
  return (
    <div className="App">
      <input type="text" onChange={handleInputChange} />
      <button onClick={handleClick}>Add</button>
      {
       todoList?.map((item)=> <TodoListItem text ={item.text} completed={item.completed} />) 
      }
    </div>
  );
}

export default App;
