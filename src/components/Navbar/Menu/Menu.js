import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Menu = () => {
  return (
    <ul>
      <li>
        <NavLink exact to="/" activeClassName="active">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/projects" activeClassName="active">
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/contact" activeClassName="active">
          Contact
        </NavLink>
      </li>
    </ul>
  );
};

export default Menu;
