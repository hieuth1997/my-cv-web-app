import React from "react";
import PropTypes from "prop-types";
import Navigation from "../Components/navigation/Navigation";
import Profile from "../Components/Profile/Profile";
import Education from "../Components/Education/Education";
import Experience from "../Components/Experience/Experience";

Cv.propTypes = {};

function Cv(props) {
  return (
    <div>
      <Navigation></Navigation>
      <div className="content">
        <Profile></Profile>
        <Education></Education>
        <Experience></Experience>
      </div>
    </div>
  );
}

export default Cv;
