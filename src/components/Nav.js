import React from 'react';
import {Consumer} from './Context';
import NavSection from './NavSection';
import {NavLink} from 'react-router-dom';

const Nav = () => {

   // MOBILE NAVIGATION BURGER TOGGLE
   let id = null; 
   let pos = -600;

   function slideMenu() {
      const elem = document.getElementById("nav");
      const button = document.getElementById("nav-button");
      button.classList.toggle("open");
      if (pos === -600) {
         id = setInterval(openMenu, 1);
         function openMenu() {
            if (pos === 0) {
               clearInterval(id);
            } else {
               pos += 6;
               elem.style.top = pos + 'px';
            }
         }
      } else {
         clearInterval(id);
         id = setInterval(closeMenu, 1);
         function closeMenu() {
            if (pos === -600) {
               clearInterval(id);
            } else {
               pos -= 6;
               elem.style.top = pos + 'px';
            }
         }
      }
   }

   function closeOnSelection() {
      const elem = document.getElementById("nav");
      const button = document.getElementById("nav-button");
      button.classList.toggle("open");
      clearInterval(id);
      id = setInterval(closeMenu, 1);
      function closeMenu() {
         if (pos === -600) {
            clearInterval(id);
         } else {
            pos -= 6;
            elem.style.top = pos + 'px';
         }
      }
   }

   return (

      <Consumer>

         {({sections}) => (

            <React.Fragment>

               <button id="nav-button" onClick={slideMenu} aria-label="Burger menu" />

               <div id="nav-container">
                  <nav id="nav">

                     <NavLink onClick={closeOnSelection} activeClassName="selected" exact to="/" >
                        Home
                     </NavLink>

                     {sections.map( (sections, index) =>
                        <NavSection 
                           key={sections.id}
                           index={index}
                           closeOnSelection={closeOnSelection}
                        />
                     )}

                     {/*<NavLink activeClassName="selected" to="/news" >
                        News
                     </NavLink>*/}
                     <a onClick={closeOnSelection} href="https://github.com/scottbrabazon" target="_blank" rel="noreferrer">
                        GitHub
                     </a>
                     <NavLink onClick={closeOnSelection} activeClassName="selected" to="/contact" >
                        Contact
                     </NavLink>
                  </nav>
               </div>

            </React.Fragment>
         )}
      </Consumer>
   );
}

export default Nav;