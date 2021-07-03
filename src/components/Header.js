import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__icon">
        <img src="/logo_1.svg" />
        <section>Bright Burn</section>
      </div>
      <div className="header__nav">
        <a>Categories</a>
        <a>Teach on BB</a>
        <a>BB for Business</a>
        <button className="header__login">Login</button>
        <button className="header__signup">Signup</button>
      </div>
    </div>
  );
}

export default Header;
