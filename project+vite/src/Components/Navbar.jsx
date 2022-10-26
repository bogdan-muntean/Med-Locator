import React from "react";
import medicalLogo from "./../images/medical-logo.jpg";

const Navbar = () => {
  return (
    <div className="container-navbar grayscale">
      <img src={medicalLogo}></img>
      <div>
        <a src="#">Acasa</a>
        <a src="#">Noutati</a>
        <a src="#">Inregistrare</a>
        <a src="#">Logare</a>
        <a src="#">Cumpara</a>
      </div>
    </div>
  );
};

export default Navbar;
