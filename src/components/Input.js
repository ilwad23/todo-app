import React from "react";

function Input({ handleSubmit, setValue, value }) {
  const getValue = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="input">
      <div className="input__circle"></div>
      <input
        className="input__field"
        value={value}
        onChange={(e) => getValue(e)}
        type="text"
        placeholder="Create a new todo..."
        onKeyPress={(e) => handleSubmit(e)}
      />
    </div>
  );
}

export default Input;
