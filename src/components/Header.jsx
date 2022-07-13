import React from "react";
import logo from "../images/Vector.svg";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Around The U.S." className="logo" />
    </header>
  );
};

export default Header;