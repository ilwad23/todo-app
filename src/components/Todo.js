import React, { useState } from "react";
import IconCross from "../images/icon-cross.svg";
function Todo({ setTodos, todo }) {
  const [completed, setCompleted] = useState(false);

  function cancelTodo() {
    setTodos((prevTodos) => {
      let newTodos = prevTodos.filter((obj, i) => {
        console.log(obj);
        return obj.id !== todo.id;
      });
      return newTodos;
    });
  }
  function handleTodos() {
    setTodos((prevTodos) => {
      let newTodos = prevTodos.map((obj, i) => {
        if (obj.id === todo.id) {
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
        <div className="todo__circleContiner">

        <div
          className={`todo__circle ${
            todo.completed
            ? "todo__circle--completed"
            : "todo__circle--uncompleted"
          }`}
          ></div>
          </div>
        <div
          className={`todo__text ${
            todo.completed ? "todo__text--completed" : "todo__text--uncompleted"
          }`}
        >
          {todo.message}
        </div>
      </div>
      <img
        className="todo__cross"
        src={IconCross}
        onClick={() => cancelTodo()}
      />
    </div>
  );
}

export default Todo;
