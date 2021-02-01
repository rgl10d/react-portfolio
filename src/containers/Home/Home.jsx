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
    directory: "Directory",
    scheduler: "Work Day Scheduler",
  };

  const description = {
    makeup: "Free-from-All allows users to input their current location & search for the makeup type, brand, and toxin-free requirements that they are looking for. Based on those tags, the application is able to curate a list of recommended products and provides a map of nearby shopping locations.",
    reserve: "The Reserve is a room reservation app for libraries to create a log of study rooms and manage them. Status of the rooms will change from 'Available' and 'Not Available' depending on the whether the room is occupied or still in need of sanitization.",
    directory: "Generates a random list of people through react components that you can sort and search through! The chart will automatically be generated upon loading the page. The table can be sorted by first name and the search narrows down username. With each letter typed in the search bar, the table is dynamically re-rendered.",
    scheduler: "This is a scheduler that shows the hours of a basic 9 to 5 work day. You type notes or reminders for each hour of the work day. The date at the top of the screen will also dynamically update with the current date and hours will change color relative to the current time.",
  }

  return (
    <>
      <Navbar fixed="top" />
      <div className="row portfolio-row">
        <div className="col-sm-12">
          <ProjectTitles title={titles.directory} description={description.directory} />
        </div>
        <div className="col-sm-12">
          <Parallax portfolio={projects.directory} />
        </div>
      </div>
      <hr />
      <div className="row portfolio-row">
        <div className="col-sm-12">
          <ProjectTitles title={titles.makeup} description={description.makeup} />
        </div>
        <div className="col-sm-12">
          <Parallax portfolio={projects.makeup} />
        </div>
      </div>
      <hr />
      <div className="row portfolio-row">
        <div className="col-sm-12">
          <ProjectTitles title={titles.reserve} description={description.reserve} />
        </div>
        <div className="col-sm-12">
          <Parallax portfolio={projects.reserve} />
        </div>
      </div>
      <hr />
      <div className="row portfolio-row">
        <div className="col-sm-12">
          <ProjectTitles title={titles.scheduler} description={description.scheduler} />
        </div>
        <div className="col-sm-12">
          <Parallax portfolio={projects.scheduler} />
        </div>
      </div>
    </>
  );
};

export default Home;
