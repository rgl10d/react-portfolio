import React from "react";
import FrontPage from "../../components/FrontPage/FrontPage";
// import Navbar from "../../components/Navbar/Navbar";
import Project from "../../components/Project/Project";
import "./Home.css";

const Home = () => {
  const projects = [
    {
      classes: "bg-img-parallax portfolio-friend",
      bgClass: "bg1 projectEl",
      title: ".append(friend)",
      description: "A simple social media app designed for developers to meet each other. This is a full MERN stack application. You can sign-up, upload a profile picture, edit your profile, delete your profile, and like other users. User authentication is implemented with bcrpyt password hashing.",
      link: "",
      id: "appendID",
      icons: [
        "devicon-html5-plain-wordmark colored",
        "devicon-css3-plain-wordmark colored",
        "devicon-javascript-plain colored",
        "devicon-nodejs-plain-wordmark colored",
        "devicon-express-original-wordmark colored",
        "devicon-mongodb-plain-wordmark colored",
        "devicon-react-original-wordmark colored",
        "devicon-heroku-plain-wordmark colored",
      ]
    },
    {
      classes: "bg-img-parallax portfolio-directory",
      bgClass: "bg2 projectEl",
      title: "A Directory",
      description:
        "Generates a random list of people through react components that you can sort and search through! The chart will automatically be generated upon loading the page. The table can be sorted by first name and the search narrows down username. With each letter typed in the search bar, the table is dynamically re-rendered.",
      link: "https://rgl10d.github.io/employee-directory/#/",
      icons: [
        "devicon-html5-plain-wordmark colored",
        "devicon-css3-plain-wordmark colored",
        "devicon-javascript-plain colored",
        "devicon-react-original-wordmark colored",
      ]
    },
    {
      classes: "bg-img-parallax portfolio-makeup",
      bgClass: "bg1 projectEl",
      title: "Free-from-All Makeup Source",
      description:
        "Free-from-All allows users to input their current location & search for the makeup type, brand, and toxin-free requirements that they are looking for. Based on those tags, the application is able to curate a list of recommended products and provides a map of nearby shopping locations.",
      link: "https://rgl10d.github.io/free-from-all/",
      icons: [
        "devicon-html5-plain-wordmark colored",
        "devicon-css3-plain-wordmark colored",
        "devicon-javascript-plain colored",
      ]
    },
    {
      classes: "bg-img-parallax portfolio-reserve",
      bgClass: "bg2 projectEl",
      title: "The Reserve",
      description:
        "The Reserve is a room reservation app for libraries to create a log of study rooms and manage them. Status of the rooms will change from 'Available' and 'Not Available' depending on the whether the room is occupied or still in need of sanitization.",
      link: "https://still-ravine-68015.herokuapp.com/",
      id2: "reserveID",
      icons: [
        "devicon-html5-plain-wordmark colored",
        "devicon-css3-plain-wordmark colored",
        "devicon-javascript-plain colored",
        "devicon-nodejs-plain-wordmark colored",
        "devicon-express-original-wordmark colored",
        "devicon-mysql-plain-wordmark colored",
        "devicon-heroku-plain-wordmark colored",
      ]
    },
  ];

  return (
    <>
      {/* <Navbar /> */}
        <div className="col-sm-12">
          <FrontPage />
        </div>
      <div className="container-fluid">
      {projects.map((projects) => {
        return <Project {...projects} key={projects.title} />;
      })}
      </div>
    </>
  );
};

export default Home;
