import React from "react";

function Tool({ todos, setTodos, setOption, option }) {
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
            className={option == "all" && "tool__filter--option"}
            onClick={() => setOption("all")}
          >
            All
          </p>
          <p
            className={option == "active" && "tool__filter--option"}
            onClick={() => setOption("active")}
          >
            Active
          </p>
          <p
            className={option == "completed" && "tool__filter--option"}
            onClick={() => setOption("completed")}
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
