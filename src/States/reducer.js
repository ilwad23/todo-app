import sun from "../images/icon-sun.svg";
import moon from "../images/icon-moon.svg";
let storagedTheme = localStorage.getItem("todo-theme");
let storagedTodos = JSON.parse(localStorage.getItem("todos"));

if (!storagedTheme) {
  localStorage.setItem("todo-theme", "sun");
}
if (!storagedTodos) {
  localStorage.setItem("todos", JSON.stringify([]));
}

export const initialState = {
  theme: storagedTheme === "sun" ? true : false,
  themeIcon: storagedTheme === "sun" ? sun : moon,
  option: "all",
  value: "",
  todos: storagedTodos,
};
export const filteredTodos = (state) =>
  state.todos.filter((todo) =>  {
    if (state.option === "completed") {
      if (todo.completed) {
        return todo;
      }
    } else if (state.option === "active") {
      if (!todo.completed) {
        return todo;
      }
    } else {
      return todo;
    }
  });
const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE-TODOS":
      localStorage.setItem("todos", JSON.stringify(state.todos));
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
      let aTodoCompleted = state.todos.map((obj, i) => {
        if (obj.id === action.id) {
          obj.completed = !state.completed;
          return obj;
        }
        return obj;
      });
      return {
        ...state,
        todos: aTodoCompleted,
      };
    case "ADD-TODO":
      let newTodoAdded = [...state.todos];
      let resetValue = state.value
      if (state.value) {
        if (action.event.key === "Enter") {
          action.event.preventDefault();
          newTodoAdded.push({
            id: Math.random(),
            message: state.value,
            completed: false,
          });
          resetValue = ''
        }
      }
      return {
        ...state,
        todos: newTodoAdded,
        value: resetValue,
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
