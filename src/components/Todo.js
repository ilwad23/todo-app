import React from "react";
import IconCross from "../images/icon-cross.svg";
import { useStateValue } from "../States/StateProvider";

function Todo({ todo }) {
    const dispatch = useStateValue();

    return (
    <div
      className="todo"
      onClick={() =>
        dispatch[1]({
          type: "TODO-COMPLETED",
          id: todo.id,
        })
      }
    >
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
        alt='cancel'
        onClick={() => dispatch[1]({ type: "CANCEL-TODO", id: todo.id })}
      />
    </div>
  );
}

export default Todo;
