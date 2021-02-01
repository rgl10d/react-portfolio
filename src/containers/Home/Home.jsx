import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Parallax from "../../components/Parallax/Parallax";
import ProjectTitles from "../../components/ProjectTitles/ProjectTitles";
import "./Home.css";

const Home = () => {
  const projects = {
    makeup: "bg-img-parallax portfolio1",
    reserve: "bg-img-parallax portfolio2",
    directory: "bg-img-parallax portfolio3",
    scheduler: "bg-img-parallax portfolio4",
  };

  const titles = {
    makeup: "Free-from-All Makeup Source",
    reserve: "The Reserve",
    directory: "Employee Directory",
    scheduler: "Work Day Scheduler",
  };

  return (
    <>
      <Navbar fixed="top" />
      <div className="row">
        <div className="col-sm-12">
          <ProjectTitles title={titles.directory} />
        </div>
        <div className="col-sm-12">
          <Parallax portfolio={projects.directory} />
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-12">
          <ProjectTitles title={titles.makeup} />
        </div>
        <div className="col-sm-12">
          <Parallax portfolio={projects.makeup} />
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-12">
          <ProjectTitles title={titles.reserve} />
        </div>
        <div className="col-sm-12">
          <Parallax portfolio={projects.reserve} />
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-12">
          <ProjectTitles title={titles.scheduler} />
        </div>
        <div className="col-sm-12">
          <Parallax portfolio={projects.scheduler} />
        </div>
      </div>
    </>
  );
};

export default Home;
