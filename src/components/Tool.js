import React from "react";
import { useStateValue } from "../States/StateProvider";

function Tool({ todos, setTodos, setOption, option }) {
  const [state, dispatch] = useStateValue();
  return (
    <div className="tool">
      <div className="tool__completedTodos">
        <div className="tool__completedTodos--num">
          {todos.filter((v) => !v.completed).length}
        </div>
        <p>items left</p>
      </div>
      <div className="tool__filterWrapper">
        <div className="tool__filter">
          <p
            className={state.option == "all" ? "tool__filter--option" : ""}
            onClick={() => dispatch({ type: "SET-OPTION", option: "all" })}
          >
            All
          </p>
          <p
            className={state.option == "active" ? "tool__filter--option" : ""}
            onClick={() => dispatch({ type: "SET-OPTION", option: "active" })}
          >
            Active
          </p>
          <p
            className={state.option == "completed" ? "tool__filter--option" : ""}
            onClick={() =>
              dispatch({ type: "SET-OPTION", option: "completed" })
            }
          >
            completed
          </p>
        </div>
      </div>
      <p
        className="clear top"
        onClick={() =>
          setTodos((prevTodos) => prevTodos.filter((obj) => !obj.completed))
        }
      >
        Clear Completed
      </p>
    </div>
  );
}

export default Tool;
