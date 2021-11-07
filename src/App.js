import React, { useState } from "react";
import "./styles/style.css";
import sun from "./images/icon-sun.svg";
import moon from "./images/icon-moon.svg";
function App() {
  const [theme, setTheme] = useState(true);
  const [completed, setCompleted] = useState(true);
  const themeIcon = theme ? sun : moon;
  return (
    <div
      class={`container ${theme ? "dark" : "light"}`}
      data-theme={theme ? "dark" : "light"}
    >
      <div class="wrapper">
        <div class="header">
          <h1 class="logo">Todo</h1>
          <img
            onClick={() => setTheme(!theme)}
            src={themeIcon}
            alt="dark-light theme"
            />
        </div>
        <div class="input">
          <div class="circle"></div>
          <input type="text" placeholder="Currently typing" />
        </div>
        <div class="list">
          <div class="todo"
            onClick={() => setCompleted(!completed)}
          >
            <div
              class={`circle ${completed ? "completed" : "uncompleted"}`}
              ></div>
            <div class={`text ${completed ? "completed" : "uncompleted"}`}>
              Complete Todo App on Frontend Mentor
            </div>
          </div>
          <div class="todo"
            onClick={() => setCompleted(!completed)}
          >
            <div
              class={`circle ${completed ? "completed" : "uncompleted"}`}
              ></div>
            <div class={`text ${completed ? "completed" : "uncompleted"}`}>
              Complete Todo App on Frontend Mentor
            </div>
          </div>
          <div class="tool">
            <div class="items-left top">
              <span class="num">0</span>
              <p>items left</p>
            </div>
            <div class="filter">
              <p className='option'>All</p>
              <p>Active</p>
              <p>completed</p>
            </div>
            <p class="clear top">Clear Completed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
