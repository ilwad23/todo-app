import React from "react";

function Tool({ todos,setTodos, setOption, option }) {
  return (
    <div className="tool">
      <div className="items-left top">
        <span className="num">{todos.filter((v) => !v.completed).length}</span>
        <p>items left</p>
      </div>
      <div className="filter">
        <p
          className={option == "all" && "option"}
          onClick={() => setOption("all")}
        >
          All
        </p>
        <p
          className={option == "active" && "option"}
          onClick={() => setOption("active")}
        >
          Active
        </p>
        <p
          className={option == "completed" && "option"}
          onClick={() => setOption("completed")}
        >
          completed
        </p>
      </div>
      <p className="clear top" onClick={() => setTodos([])}>
        Clear Completed
      </p>
    </div>
  );
}

export default Tool;
