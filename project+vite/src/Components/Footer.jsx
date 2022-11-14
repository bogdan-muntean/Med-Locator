import React from "react";

const Footer = () => {
  return (
    <div className="container-footer">
      <div className="quick-links">
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
      <div className="useful-links">
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
      <div className="container-map" id="map">
        <iframe
            className="map-primarie"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.6717066736305!2d26.08409101548511!3d44.419381979102496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff73467c4f57%3A0xbd005ca1d8c7d218!2sBulevardul%20George%20Co%C8%99buc%2C%20Bucure%C8%99ti!5e0!3m2!1sen!2sro!4v1668423308323!5m2!1sen!2sro"
          
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="contact-information">
        <h3>CONTACT INFORMATION</h3>
        <ul>
          <li>Bulevardul George Cosbuc, Bucuresti</li>
          <li>Tel: 021 409 3294</li>
          <li>Email: info@yourspecialist.com</li>
          <li>Website: </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
