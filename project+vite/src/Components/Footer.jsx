import React from 'react'

const Footer = () => {
  return (
    <div className='container-footer'>
        <div className='quick-links'>
            <h3>QUICK LINKS</h3>
            <ul>
                <li>About Us</li>
                <li>Search Doctors</li>
                <li>Search Dentist</li>
                <li>Rate Doctors</li>
                <li>Patient Registration</li>
                <li>Doctor Registration</li>
                <li>Hospital Registration</li>
            </ul>
        </div>
        <div className='useful-links'>
            <h3>USEFUL LINKS</h3>
            <ul>
                <li>Link to us</li>
                <li>Resources</li>
                <li>Terms</li>
                <li>Privacy</li>
                <li>Help</li>
                <li>News</li>
                <li>Contact Us</li>
            </ul>
        </div>
        <div className='container-map' id='map'>

        </div>
        <div className='contact-information'>
            <h3>CONTACT INFORMATION</h3>
            <ul>
                <li>Bulevardul George Cosbuc, Bucuresti</li>
                <li>Tel: 021 409 3294</li>
                <li>Email: info@yourspecialist.com</li>
                <li>Website: </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer