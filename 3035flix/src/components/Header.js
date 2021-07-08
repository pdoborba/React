import React from "react";
import Logo from "../img/logo.png";
import user from "../img/man-user.png"
import "./Header.css";

function Header({black}) {
  return (
    <header className={black ? 'black' : ''}>
      <div className="header--logo">
        <a href="#">
          <img src={Logo} alt="logo" />
        </a>
      </div>
      <div className="header--user">
      <a href="#">
        <img src={user} alt="usuário"/>
      </a>
      </div>
    </header>
  );
}

export default Header;
