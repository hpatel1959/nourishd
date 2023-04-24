import React from "react";
import headerImg from "../img/header.jpg";

function Header() {
  return (
    <div>
      <img src={headerImg} alt="header" className="header-img" />
    </div>
  );
}

export default Header;
