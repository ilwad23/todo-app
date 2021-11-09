import sun from "../images/icon-sun.svg";
import moon from "../images/icon-moon.svg";
let storagedTheme = localStorage.getItem("todo-theme");

if (!storagedTheme) {
  localStorage.setItem("todo-theme", "sun");
}

export const initialState = {
  theme: storagedTheme == "sun" ? true : false,
  themeIcon: storagedTheme == "sun" ? sun : moon,
  value: "",
  option: "all",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET-OPTION":
      return {
        ...state,
        option: action.option,
      };
    case "SET-VALUE":
      return {
        ...state,
        value: action.value,
      };

    case "SET-THEME":
      let icon = !state.theme == false ? "moon" : "sun";
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
