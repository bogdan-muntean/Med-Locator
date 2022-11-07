import React from "react";
import medicalLogo from "./../images/medical-logo.jpg";
// import { faXmark } from  '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <div className="container-navbar">
      <div className="top-area">
        <div className="row">
          <div className="col1">
            <div className="top-email">
            {/* <FontAwesomeIcon icon="fa-regular fa-envelope" /> */}
              <a href="mailto:info@yourspecialist.com">info@yourspecialist.com</a>
            </div>
                        
            <div className="top-phone">
              <a href="tel:0264948299">0264948299</a>
            </div>
          </div>
          <div className="col2" id="div-col2">
              <div>
                <a href="#">Creaza cont nou sau Conecteaza-te</a>
              </div>
          </div>
        </div>
      </div>
      <nav>
        <label className="logo">YourSpecialist</label>
        <ul>
          <li><a href="#">Acasa</a></li>
          <li><a href="#">Despre noi</a></li>
          <li><a href="#">Spitale si Clinici</a></li>
          <li><a href="#">Contacte</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </nav>
    </div>
    
  );
};

export default Navbar;

