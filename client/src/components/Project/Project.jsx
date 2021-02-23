import React from "react";
import ProjectTitles from "../ProjectTitles/ProjectTitles";
import Parallax from "../Parallax/Parallax";

const Project = ({ title, description, classes, link }) => {
  return (
    <>
      <div className="row portfolio-row">
        <div className="col-sm-12">
          <ProjectTitles
            title={title}
            description={description}
          />
        </div>
        <div className="col-sm-12">
          <Parallax portfolio={classes} link={link} />
        </div>
      </div>
      <hr />
    </>
  );
};

export default Project;
