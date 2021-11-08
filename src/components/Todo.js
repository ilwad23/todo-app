import React, { useState } from "react";
import IconCross from "../images/icon-cross.svg";
function Todo({ setTodos, todo }) {
  const [completed, setCompleted] = useState(false);

  function cancelTodo()  {
    setTodos((prevTodos) => {
      let newTodos = prevTodos.filter((obj, i) => obj.message!==todo.message);
      return newTodos;
    });
  }
  function handleTodos() {
    setTodos((prevTodos) => {
      let newTodos = prevTodos.map((obj, i) => {
        if (obj.message === todo.message) {
          obj.completed = !completed;
          return obj;
        }
        return obj;
      });
      return newTodos;
    });
    setCompleted(!completed);
  }
  return (
    <div className="todo" onClick={() => handleTodos()}>
      <div className="todo__left">
        <div
          className={`todo__circle ${
            todo.completed
              ? "todo__circle--completed"
              : "todo__circle--uncompleted"
          }`}
        ></div>
        <div
          className={`todo__text ${
            todo.completed ? "todo__text--completed" : "todo__text--uncompleted"
          }`}
        >
          {todo.message}
        </div>
      </div>
      <img className="todo__cross" src={IconCross} onClick={() => cancelTodo()} />
    </div>
  );
}

export default Todo;
