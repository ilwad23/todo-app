import React, { useState } from "react";
import "../styles/style.css";
import { useStateValue } from "../States/StateProvider";
import Todo from "./Todo";
import Tool from "./Tool";
import Input from "./Input";
import Header from "./Header";

function App() {
  // const [todos, setTodos] = useState([]);
  const [state, dispatch] = useStateValue();
  const handleSubmit = (e) => {
    if (state.value) {
      if (e.key == "Enter") {
        e.preventDefault();
        // setTodos([
        //   ...todos,
        //   { id: Math.random(), message: state.value, completed: false },
        // ]);

        dispatch({ type: "ADD-TODO" });
      }
    }
  };
console.log(state.todos);
  let filteredTodos = state.todos.filter((todo) => {
    if (state.option == "completed") {
      if (todo.completed) {
        return todo;
      }
    } else if (state.option == "active") {
      if (!todo.completed) {
        return todo;
      }
    } else {
      return todo;
    }
  });

  let Todos = filteredTodos.map((todo, i) => (
    <Todo key={i} todo={todo} setTodos=
    {state.setTodos} />
  ));

  return (
    <div
      className={`container ${
        state.theme ? "container--dark" : "container--light"
      }`}
    >
      <div className="container__within">
        <Header />

        <Input handleSubmit={handleSubmit} />

        {state.todos.length > 0 && (
          <div className="listOfTodos">
            {Todos}
            <Tool todos={state.todos} setTodos={state.setTodos} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
