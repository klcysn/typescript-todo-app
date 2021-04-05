import React, { useState } from 'react';
import './App.scss';
import TodoListItem from "./TodoListItem"
import {Todo} from "./types"

function App() {
  const [todoList, setTodoList] = useState<Todo[]>([])
  const [todo, setTodo] = useState<string>("")

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    event.preventDefault()
    setTodo(event.target.value)
  }
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) =>{
    event.preventDefault()
    setTodoList([{text: todo, completed: false}, ...todoList])
    setTodo("")
  }
  return (
    <div className="App">
      <section className="container">
        <div className="heading">
          <img
            className="heading__img"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/756881/laptop.svg"
            alt=""
          />
          <h1 className="heading__title">To-Do List</h1>
        </div>
        <form className="form">
          <div>
            <label className="form__label">~ Today I need to ~</label>
            <input
              className="form__input"
              type="text"
              id="todo"
              name="to-do"
              size={30}
              onChange={handleInputChange}
              required
              value={todo}
            />
            <button className="button" onClick={handleClick}>
              <span>Submit</span>
            </button>
          </div>
        </form>
        <div>
          <ul className="toDoList">
            {todoList?.map((item) => (
              <TodoListItem text={item?.text} completed={item?.completed} />
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default App;
