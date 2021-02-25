import React from "react";
import "./ProjectTitles.css";

const ProjectTitles = (props) => {
  return (
    <div className="container">
      <div className="titleEl">
        <h3 className="titles" style={{ color: "#368265" }}>
          {props.title}
        </h3>
        <p className="description-text">{props.description}</p>
        <div className="row">
          <div className="col-sm-12">
            <div className="icon-tray">
              <i className="devicon-html5-plain-wordmark colored"></i>
              <i className="devicon-css3-plain-wordmark colored"></i>
              <i className="devicon-javascript-plain colored"></i>
              <i className="devicon-nodejs-plain-wordmark colored"></i>
              <i className="devicon-express-original-wordmark colored"></i>
              <i className="devicon-mongodb-plain-wordmark colored"></i>
              <i className="devicon-react-original-wordmark colored"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTitles;
