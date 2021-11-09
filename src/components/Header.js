import React from 'react'
import { useStateValue } from "../States/StateProvider";

function Header() {
  const [state, dispatch] = useStateValue();
  return (
    <div className="header">
      <h1 className="header__logo">Todo</h1>
      <img
        onClick={() => dispatch({type:'SET-THEME'})}
        src={state.themeIcon}
        alt="dark-light theme"
      />
    </div>
  );
}

export default Header
