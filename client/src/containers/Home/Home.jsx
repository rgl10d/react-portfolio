import React from "react";
import FrontPage from "../../components/FrontPage/FrontPage";
// import Navbar from "../../components/Navbar/Navbar";
import Project from "../../components/Project/Project";
import "./Home.css";

const Home = () => {
  const projects = [
    {
      classes: "bg-img-parallax portfolio-friend",
      bgClass: "bg1",
      title: ".append(friend)",
      description: "APPEND FRIEND DESCRIPTION",
      link: "",
    },
    {
      classes: "bg-img-parallax portfolio-directory",
      bgClass: "bg2",
      title: "A Directory",
      description:
        "Generates a random list of people through react components that you can sort and search through! The chart will automatically be generated upon loading the page. The table can be sorted by first name and the search narrows down username. With each letter typed in the search bar, the table is dynamically re-rendered.",
      link: "https://rgl10d.github.io/employee-directory/#/",
    },
    {
      classes: "bg-img-parallax portfolio-makeup",
      bgClass: "bg1",
      title: "Free-from-All Makeup Source",
      description:
        "Free-from-All allows users to input their current location & search for the makeup type, brand, and toxin-free requirements that they are looking for. Based on those tags, the application is able to curate a list of recommended products and provides a map of nearby shopping locations.",
      link: "https://rgl10d.github.io/free-from-all/",
    },
    {
      classes: "bg-img-parallax portfolio-reserve",
      bgClass: "bg2",
      title: "The Reserve",
      description:
        "The Reserve is a room reservation app for libraries to create a log of study rooms and manage them. Status of the rooms will change from 'Available' and 'Not Available' depending on the whether the room is occupied or still in need of sanitization.",
      link: "https://still-ravine-68015.herokuapp.com/",
    },
  ];

  return (
    <>
      {/* <Navbar /> */}
      <div className="row">
        <div className="col-sm-12">
          <FrontPage />
        </div>
      </div>
      {projects.map((projects) => {
        return <Project {...projects} key={projects.title} />;
      })}
    </>
  );
};

export default Home;
