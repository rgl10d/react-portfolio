import React from "react";
import "./Parallax.css";

const Parallax = (props) => {
  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      <div className={props.portfolio}></div>
    </a>
  );
};

export default Parallax;
