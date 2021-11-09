import React, { useState } from "react";
import "../styles/style.css";
import { useStateValue } from "../States/StateProvider";
import Todo from "./Todo";
import Tool from "./Tool";
import Input from "./Input";
import Header from "./Header";

function App() {
  const [todos, setTodos] = useState([]);
  const [option, setOption] = useState("all");
  const [state, dispatch] = useStateValue();
  function handleSubmit(e) {
    if (state.value) {
      if (e.key == "Enter") {
        e.preventDefault();
        setTodos([...todos, { message: state.value, completed: false }]);
        
      }
    }
  }

  let filteredTodos = todos.filter((todo) => {
    if (option == "completed") {
      if (todo.completed) {
        return todo;
      }
    } else if (option == "active") {
      if (!todo.completed) {
        return todo;
      }
    } else {
      return todo;
    }
  });

  let Todos = filteredTodos.map((todo, i) => (
    <Todo key={i} todo={todo} setTodos={setTodos} />
  ));

  return (
    <div
      className={`container ${
        state.theme ? "container__dark" : "container__light"
      }`}
    >
      <div className="container__within">
        <Header />

        <Input handleSubmit={handleSubmit} />

        {todos.length > 0 && (
          <div className="listOfTodos">
            {Todos}
            <Tool
              todos={todos}
              setTodos={setTodos}
              setOption={setOption}
              option={option}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
