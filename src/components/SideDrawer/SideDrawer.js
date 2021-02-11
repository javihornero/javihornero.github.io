import React, { useState } from "react";
import Menu from "../Navbar/Menu/Menu";
import Overlay from "../Overlay/Overlay";
import "./SideDrawer.scss";

const SideDrawer = (props) => {
  const clasess = ["SideDrawer", props.show ? "Open" : "Closed"];

  return (
    <>
      <Overlay clicked={props.overlayClick} show={props.show}/>
      <div className={clasess.join(" ")}>
        <Menu />
      </div>
    </>
  );
};

export default SideDrawer;
