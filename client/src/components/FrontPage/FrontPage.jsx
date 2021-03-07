import React from "react";
import "./FrontPage.css";

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
            src="http://www.fillmurray.com/600/600"
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
            Originally from Tallahassee, FL, I've been recently displaced to
            Peachtree Corners, GA. I've Florida State University and graduated
            with a degree in English followed soon by film school at Full Sail
            University in Orlando, FL. I found my first job in the film industry
            soon after, but just as quickly realized that the erratic film lifestyle
            was not for me.
          </p>
          <p>
            Having just recently graduated from the Georgia Tech Coding
            Bootcamp, I have found a new love and sense of accomplishment with
            coding and actively seeking for a position in the field.
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
