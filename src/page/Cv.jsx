import React from "react";
import PropTypes from "prop-types";
import Navigation from "../Components/navigation/Navigation";
import Profile from "../Components/Profile/Profile";
import Education from "../Components/Education/Education";
import Experience from "../Components/Experience/Experience";
import Skill from "../Components/Skills/Skill";
import Project from "../Components/Project/Project";
import Interest from "../Components/Interest/Interest";
import End from "../Components/End/Interest";

Cv.propTypes = {};

function Cv(props) {
  return (
    <div>
      <Navigation></Navigation>
      <div className="content">
        <div className="grid wide">
          <Profile></Profile>
          <Education></Education>
          <Experience></Experience>
          <Skill></Skill>
          <Project></Project>
          <Interest />
          <End></End>
        </div>
      </div>
    </div>
  );
}

export default Cv;
