import React from "react";
import { useStateValue } from "../States/StateProvider";
function Input({ handleSubmit }) {
  const [state, dispatch] = useStateValue();
  return (
    <div className="input">
      <div className="input__circle"></div>
      <input
        className="input__field"
        value={state.value}
        onChange={(e) => dispatch({ type: "SET-VALUE", value: e.target.value })}
        type="text"
        placeholder="Create a new todo..."
        onKeyPress={(e) => handleSubmit(e)}
      />
    </div>
  );
}

export default Input;
