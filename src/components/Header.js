import React from 'react'

function Header({ theme, setTheme, themeIcon }) {
  return (
    <div className="header">
      <h1 className="header__logo">Todo</h1>
      <img
        onClick={() => setTheme(!theme)}
        src={themeIcon}
        alt="dark-light theme"
      />
    </div>
  );
}

export default Header
