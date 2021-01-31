import React from "react";
import "./ProjectTitles.css";

const ProjectTitles = (props) => {
  return (
    <div className="titleEl">
      <h3 className="titles" style={{color: "#368265"}}>{props.title}</h3>
      <p style={{color: "white"}}>Description time.</p>
    </div>
  );
};

export default ProjectTitles;
