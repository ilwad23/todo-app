import sun from "../images/icon-sun.svg";
import moon from "../images/icon-moon.svg";
let storagedTheme = localStorage.getItem("todo-theme");

if (!storagedTheme) {
  localStorage.setItem("todo-theme", "sun");
}

export const initialState = {
  theme: storagedTheme === "sun" ? true : false,
  themeIcon: storagedTheme === "sun" ? sun : moon,
  option: "all",
  value: "",
  todos: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR-COMPLETED-TODOS":
      return {
        ...state,
        todos: state.todos.filter((obj) => !obj.completed),
      };
    case "CANCEL-TODO":
      let newTodosFilter = state.todos.filter((obj) => {
        return obj.id !== action.id;
      });
      return {
        ...state,
        todos: newTodosFilter,
      };

    case "TODO-COMPLETED":
      let newTodos = state.todos.map((obj, i) => {
        if (obj.id === action.id) {
          obj.completed = !state.completed;
          return obj;
        }
        return obj;
      });
      return {
        ...state,
        todos: newTodos,
      };
    case "ADD-TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: Math.random(), message: state.value, completed: false },
        ],
        value: "",
      };
    case "SET-VALUE":
      return {
        ...state,
        value: action.value,
      };
    case "SET-OPTION":
      return {
        ...state,
        option: action.option,
      };
    case "SET-THEME":
      let icon = !state.theme === false ? "moon" : "sun";
      localStorage.setItem("todo-theme", icon);
      return {
        ...state,
        themeIcon: !state.theme ? sun : moon,
        theme: !state.theme,
      };
    default:
      return state;
  }
};

export default reducer;
