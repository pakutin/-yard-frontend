import React from "react";
import navLogo from "./img/nav-logo.svg";
import heroLogo from "./img/hero-logo.svg";
import img1 from "./img/img1.jpg";
import arrow from "./img/arrow.svg";
export default () => {
  return (
    <div>
      <header className="header">
        <div className="header-logo">
          <img src={navLogo} width="179px" height="24px" />
        </div>
        <nav className="header-nav">
          <a className="header-nav-link" href>Купить</a>
          <a className="header-nav-link" href>Снять</a>
          <a className="header-nav-link" href>Наши агенты</a>
        </nav>
      </header>
    </div>
  );
};
