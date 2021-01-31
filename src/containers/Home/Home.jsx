import React from "react";
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
      <div className="row">
        <ProjectTitles title={titles.directory} />
        <Parallax portfolio={projects.directory} />
      </div>
      <hr />
      <div className="row">
        <ProjectTitles title={titles.makeup} />
        <Parallax portfolio={projects.makeup} />
      </div>
      <hr />
      <div className="row">
        <ProjectTitles title={titles.reserve} />
        <Parallax portfolio={projects.reserve} />
      </div>
      <hr />
      <div className="row">
        <ProjectTitles title={titles.scheduler} />
        <Parallax portfolio={projects.scheduler} />
      </div>
    </>
  );
};

export default Home;
