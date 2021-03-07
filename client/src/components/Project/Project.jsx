import React from "react";
import ProjectTitles from "../ProjectTitles/ProjectTitles";
import Parallax from "../Parallax/Parallax";
import "./Project.css";

const Project = ({ title, description, classes, link, bgClass, id, id2, icons }) => {
  return (
    <>
    <div className={bgClass}>
      <div className="row portfolio-row" id={id2}>
        <div className="col-sm-12">
          <ProjectTitles title={title} description={description} id={id} icons={icons}/>
        </div>
        <div className="col-sm-12">
          <Parallax portfolio={classes} link={link} />
        </div>
      </div>
    </div>
    </>
  );
};

export default Project;
