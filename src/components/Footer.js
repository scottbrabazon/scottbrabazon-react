import React from 'react';
import Linkedin from '../img/linkedin.png';

const Footer = () => {

   let year = new Date().getFullYear();

   return (
      <footer>
            <a href="https://uk.linkedin.com/in/scottbrabazon" target="blank">
               <img src={Linkedin} alt="LinkedIn" width="22" height="22" />
            </a>
            <p>&nbsp;&nbsp;&copy; <span>{year}</span> Scott Brabazon</p>
      </footer>
   );
}

export default Footer;