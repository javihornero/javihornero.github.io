import React from "react";
import "./Overlay.scss";

const Overlay = (props) => {
  return props.show ? (
    <div className="Overlay" onClick={props.clicked}></div>
  ) : null;
};

export default Overlay;
