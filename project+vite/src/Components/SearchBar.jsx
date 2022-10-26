import React from 'react'
import background from "../images/doctor-work.jpg"
import background2 from "./../images/medical-orizontal1.jpg";
import background3 from "./../images/medical-image1.jpg";
import background4 from "./../images/search-banner.jpg";

const SearchBar = () => {
  return (
    <div className='container-search-bar' 
    style={{backgroundImage: `url(${background4})`}}
    >
        <div className='search-bar'>
            <h3>Cauta personalul medical dupa urmatoarele criterii</h3>
            <form>
                <select name="oras" id="oras">
                    <option name="bucuresti" id="bucuresti">Bucuresti</option>
                    <option name="cluj-napoca" id="cluj-napoca">Cluj-Napoca</option>
                    <option name="brasov" id="brasov">Brasov</option>
                    <option name="timisoara" id="timisoara">Timisoara</option>
                </select>  
            </form>
        </div>

    </div>
  )
}

export default SearchBar