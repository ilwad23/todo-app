import React, {useEffect} from "react";
import { useStateValue } from "../States/StateProvider";
import Todo from "./Todo";
import Tool from "./Tool";
import Input from "./Input";
import Header from "./Header";
import "../styles/style.css";

function App() {
  const [state, dispatch] = useStateValue();

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
