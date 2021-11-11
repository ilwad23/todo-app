import React from "react";
import { useStateValue } from "../States/StateProvider";
function Input() {
  const [state, dispatch] = useStateValue();
  return (
    <div className="input">
      <div className="input__circleContiner">
        <div className="input__circle"></div>
      </div>
      <input
        className="input__field"
        value={state.value}
        onChange={(e) => dispatch({ type: "SET-VALUE", value: e.target.value })}
        type="text"
        placeholder="Create a new todo..."
        onKeyPress={(e) => dispatch({ type: "ADD-TODO", event: e })}
      />
    </div>
  );
}

export default Input;
