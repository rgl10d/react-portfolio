import React from "react";
import "./FrontPage.css";
import Image from "./itsme.png";

// FOR ICON HOVER IF WANTING TO IMPLEMENT IT
// import React, { useState } from 'react';

// export default function Component () {
//   const [hovered, setHovered] = useState(false);
//   const toggleHover = () => setHovered(!hovered);
//   return (
//     <button
//       className={hovered ? 'pulse animated' : ''}
//       onMouseEnter={toggleHover}
//       onMouseLeave={toggleHover}
//     >
//     </button>
//   )
// }

const FrontPage = () => {
  return (
    <div className="container-fluid front-page-div">
      <div className="row">
        <div className="col-sm-12 imgEl">
          <img
            className="center"
            id="profile-picture"
            src={Image}
            alt="Garrett Lee"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <h2 className="name-text" style={{ color: "#368265" }}>
            Garrett Lee
          </h2>
          <h5 className="name-text" style={{ color: "#368265" }}>
            Full-Stack Developer
          </h5>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-10 about-me">
          <p>
            I am a web developer with a background in film. Having recently completed the 
            Georgia Tech full stack coding boot camp, a new love and appreciation for web 
            development and a slew of new skills and tech, like React and JavaScript, are 
            at my disposal. I’m passionate about learning new angles on how to approach coding 
            and meeting, and collaborating, with others.. With each project, my goal is to create 
            something unique that draws people back in. I look forward to being part of a team that 
            creates something great. 
          </p>
        </div>
        <hr />
        <div className="col-sm-12 name-text">
          <p>Technologies and Languages:</p>
        </div>
        <div className="icon-tray col-sm-12">
          <i className="devicon-html5-plain-wordmark colored"></i>
          <i className="devicon-css3-plain-wordmark colored"></i>
          <i className="devicon-javascript-plain colored"></i>
          <i className="devicon-nodejs-plain-wordmark colored"></i>
          <i className="devicon-express-original-wordmark"></i>
          <i className="devicon-mongodb-plain-wordmark colored"></i>
          <i className="devicon-react-original-wordmark colored"></i>
          <i className="devicon-mysql-plain-wordmark colored"></i>
          <i className="devicon-handlebars-plain-wordmark"></i>
          <i className="devicon-jquery-plain-wordmark colored"></i>
          <i className="devicon-heroku-plain-wordmark colored"></i>
          <i className="devicon-bootstrap-plain-wordmark colored"></i>
        </div>
        <div className="col-sm-12 name-text">
          <p>What I'm learning now:</p>
        </div>
        <div className="icon-tray col-sm-12" style={{ display: "inline" }}>
          <i className="devicon-python-plain-wordmark colored"></i>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
