import React from "react";
import { useStateValue } from "../States/StateProvider";
import { filteredTodos } from "../States/reducer";
import Todo from "./Todo";
import Tool from "./Tool";
import Input from "./Input";
import Header from "./Header";
import "../styles/style.css";

function App() {
  const state = useStateValue()[0];
  const Todos = filteredTodos(state).map((todo, i) => (
    <Todo key={i} todo={todo} setTodos={state.setTodos} />
  ));

  return (
    <div
      className={`container ${
        state.theme ? "container--dark" : "container--light"
      }`}
    >
      <div className="container__within">
        <Header />
        <Input />
        {state.todos.length > 0 && (
          <div className="listOfTodos">
            {Todos}
            <Tool />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
