import React from "react";
import { useStateValue } from "../States/StateProvider";

function Tool() {
  const [state, dispatch] = useStateValue();
  return (
    <div className="tool">
      <div className="tool__top">
        <span className="tool__top--num">
          {state.todos.filter((v) => !v.completed).length}
        </span>
        <p>items left</p>
      </div>
      <div className="tool__bottom">
        <div className="tool__filter">
          <p
            className={state.option === "all" ? "tool__filter--option" : ""}
            onClick={() => dispatch({ type: "SET-OPTION", option: "all" })}
          >
            All
          </p>
          <p
            className={state.option === "active" ? "tool__filter--option" : ""}
            onClick={() => dispatch({ type: "SET-OPTION", option: "active" })}
          >
            Active
          </p>
          <p
            className={
              state.option === "completed" ? "tool__filter--option" : ""
            }
            onClick={() =>
              dispatch({ type: "SET-OPTION", option: "completed" })
            }
          >
            completed
          </p>
        </div>
      </div>
      <p
        className="tool__clear tool__top"
        onClick={() => dispatch({ type: "CLEAR-COMPLETED-TODOS" })}
      >
        Clear Completed
      </p>
    </div>
  );
}

export default Tool;
