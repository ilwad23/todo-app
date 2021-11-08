import React from "react";

function Input({ handleSubmit, setValue, value }) {
  return (
    <div className="input">
      <div className="input__circle"></div>
      <input
        className="input__field"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Create a new todo..."
        onKeyPress={(e) => handleSubmit(e)}
      />
    </div>
  );
}

export default Input;
