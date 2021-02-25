import React from "react";
import "./FrontPage.css";

const FrontPage = () => {
  return (
    <div className="container-fluid front-page-div">
      <div className="row">
        <div className="col-sm-12">
          <h2 className="name-text">Garrett Lee</h2>
          <h5 className="name-text">Full-Stack Developer</h5>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-2">
          <img id="profile-picture" src="http://www.fillmurray.com/250/250" alt="Garrett Lee" />
        </div>
        <div className="col-sm-10">
          <p style={{ color: "white" }}>
            My name is Garrett Lee. I am from Tallahassee, FL, but I now live in
            Peachtree Corners, GA. I originally went to Florida State University
            and graduated with a degree in English which, at the time, was just
            a stepping stone towards film school. I went to Full Sail University
            in Orlando, FL and graduated after a couple of years. I found my
            first job in the film industry soon after, but just as quickly
            realized that that lifestyle was not for me.
          </p>
          <p>
            Having just recently graduated from the Georgia Tech Coding
            Bootcamp, I have found a new love and sense of accomplishment with
            coding and actively seeking for a position in the field. I will
            continue to update this page with further projects in the future!
          </p>
        </div>
      </div>
      <p>Technologies/Languages I use:</p>
      <div className="row">
        <div className="icon-tray col-sm-12">
          <i className="devicon-html5-plain-wordmark colored"></i>
          <i className="devicon-css3-plain-wordmark colored"></i>
          <i className="devicon-javascript-plain colored"></i>
          <i className="devicon-nodejs-plain-wordmark colored"></i>
          <i className="devicon-express-original-wordmark colored"></i>
          <i className="devicon-mongodb-plain-wordmark colored"></i>
          <i className="devicon-react-original-wordmark colored"></i>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
