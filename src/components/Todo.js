import React, { useState } from "react";
import IconCross from '../images/icon-cross.svg'
function Todo({  setTodos,todo }) {
  const [completed, setCompleted] = useState(false);

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
     <div className='left'>

      <div
        className={`circle ${todo.completed ? "completed" : "uncompleted"}`}
        ></div>
      <div className={`text ${todo.completed ? "completed" : "uncompleted"}`}>
        {todo.message}
      </div>

    </div>
    <img className='cross' src={IconCross} onClick={()=>console.log('clicked')}/>
        </div>
  );
}

export default Todo;
