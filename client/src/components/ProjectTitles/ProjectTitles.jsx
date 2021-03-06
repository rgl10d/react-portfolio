import React from "react";
import "./ProjectTitles.css";

const ProjectTitles = (props) => {
  if (!props.icons) return null;
  return (
    <div className="titleEl" id={props.id}>
      <h3 className="titles" style={{ color: "#368265" }}>
        {props.title}
      </h3>
      <p className="description-text">{props.description}</p>
      <div className="row">
        <div className="col-sm-12">
          <div className="icon-tray">
            {props.icons.map((icons) => {
              return <i className={icons}></i>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTitles;
