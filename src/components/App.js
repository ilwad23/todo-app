import React, { useState } from "react";
import "../styles/style.css";
import sun from "../images/icon-sun.svg";
import moon from "../images/icon-moon.svg";
import Todo from "./Todo";
import Tool from "./Tool";
import Input from "./Input";
import Header from "./Header";

function App() {
  const [theme, setTheme] = useState(true);
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [option, setOption] = useState("all");
  const themeIcon = theme ? sun : moon;
  function handleSubmit(e) {
    if (value) {
      if (e.key == "Enter") {
        e.preventDefault();
        setTodos([...todos, { message: value, completed: false }]);
        setValue("");
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
      className={`container ${theme ? "dark" : "light"}`}
      data-theme={theme ? "dark" : "light"}
    >
      <div className="wrapper">
        <Header theme={theme} setTheme={setTheme} themeIcon={themeIcon} />

        <Input handleSubmit={handleSubmit} setValue={setValue} value={value} />

        {todos.length > 0 && (
          <div className="list">
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
