import React from "react";
import ProjectTitles from "../ProjectTitles/ProjectTitles";
import Parallax from "../Parallax/Parallax";
import "./Project.css";

const Project = ({ title, description, classes, link, bgClass }) => {
  return (
    <>
    <div className={bgClass}>
      <div className="row portfolio-row">
        <div className="col-sm-12">
          <ProjectTitles title={title} description={description} />
        </div>
        <div className="col-sm-12">
          <Parallax portfolio={classes} link={link} />
        </div>
      </div>
      {/* <hr /> */}
      </div>
    </>
  );
};

export default Project;
