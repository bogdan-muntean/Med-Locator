import React from "react";
import background from "../images/doctor-work.jpg";
import background2 from "./../images/medical-orizontal1.jpg";
import background3 from "./../images/medical-image1.jpg";
import background4 from "./../images/search-banner.jpg";

const SearchBar = () => {
  return (
    <div
      className="container-search-bar"
      style={{ backgroundImage: `url(${background4})` }}
    >
      <div className="info-text">
        <p>
          Bine ai venit sa gasesti un doctor.<br></br>
          <span>
            Doctori recomandati. Alegeri informate.<br></br>
            Trimite Email cu <a href="#">INTREBARILE</a> catre YourSpecialist.<br></br>
          </span>
        </p>
        <div>
          <span>Creaza un cont pe YourSpecialist sau Logheaza-te acum</span>
        </div>
        <div>
          <span>Locuri de munca pentru doctori</span>
        </div>
      </div>
      <div className="search-doctor">
        <h3>Cauti un doctor/dentist?</h3>
        <h1>Cauti un doctor/dentist?</h1>
        <form>
          <label for="specialist">Caut un*</label>
          <select id="specialist" name="specialist">
            <option value="none">Specialist...</option>
            <option value="doctor">Doctor</option>
            <option value="dentist">Dentist</option>
          </select>
          <label for="oras">Oras</label>
          <select id="oras" name="oras">
            <option value="none">Oras...</option>
            <option value=""></option>
            <option value=""></option>
          </select>
          <label for="specialitate">Specialitate</label>
          <select id="specialitate" name="specialitate">
            <option value="none">Alege specialitatea...</option>
            <option value=""></option>
            <option value=""></option>
          </select>
          <label for="prenume">Prenume</label>
          <input id="prenume" name="prenume"></input>
          <label for="nume">Nume</label>
          <input id="nume" name="nume"></input>
          
        </form>
      </div>
    </div>
  );
};

export default SearchBar;

{




}
