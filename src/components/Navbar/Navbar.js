import React from "react";
import "./Navbar.scss";
import ThemeSetter from "./ThemeSetter/ThemeSetter";
import Menu from "./Menu/Menu";
import DrawerToggle from "./DrawerToggle/DrawerToggle";

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <DrawerToggle clicked={props.handleDrawerClick} />
      <Menu />
      <ThemeSetter />
    </nav>
  );
};

export default Navbar;
