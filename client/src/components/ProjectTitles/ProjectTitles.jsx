import React from "react";
import "./ProjectTitles.css";

const ProjectTitles = (props) => {
  return (
    <div>
      <div className="titleEl">
        <h3 className="titles" style={{ color: "#368265" }}>
          {props.title}
        </h3>
        <p className="description-text">{props.description}</p>
        <div
          style={{
            width: "auto",
            display: "inline-block",
            marginBottom: "30px",
          }}
        >
          <i className="devicon-html5-plain-wordmark colored description-text"></i>
          <i className="devicon-css3-plain-wordmark colored description-text"></i>
          <i className="devicon-javascript-plain colored description-text"></i>
          <i className="devicon-nodejs-plain-wordmark colored description-text"></i>
          <i className="devicon-express-original-wordmark colored description-text"></i>
          <i className="devicon-mongodb-plain-wordmark colored description-text"></i>
          <i className="devicon-react-original-wordmark colored description-text"></i>
        </div>
      </div>
    </div>
  );
};

export default ProjectTitles;
