import React from "react";
import "./Parallax.css";

const Parallax = (props) => {
  return (
    <div>
      <div style={{ height: 200, borderTop: "3px solid darkgrey", borderBottom: "3px solid darkgrey" }}>
        <h1>Hello there.</h1>
      </div>
      <div className={props.portfolio}>
        <h1>General Kenobi.</h1>
      </div>
    </div>
  );
};

export default Parallax;
