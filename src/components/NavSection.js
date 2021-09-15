import React from 'react';
import {Consumer} from './Context';
import {NavLink} from 'react-router-dom';

const NavSection = ({index, closeOnSelection}) => {

   return (
      <Consumer>
         {({sections}) => (
            <NavLink onClick={closeOnSelection} activeClassName="selected" 
                     to={"/" + sections[index].section.toLowerCase()}>
               {sections[index].section}
            </NavLink>
         )}
      </Consumer>
   );
}

export default NavSection;