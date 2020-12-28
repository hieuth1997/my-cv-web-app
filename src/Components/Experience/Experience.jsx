import React from "react";

import PropTypes from "prop-types";
import Company from "./Company";
Experience.propTypes = {};

function Experience(props) {
  return (
    <div className="education">
      <div className="grid wide"></div>
      <div className="row">
        <div className="col l-12 m-12">
          <h1 className="heading">Experience</h1>
        </div>
        <Company></Company>
      </div>
    </div>
  );
}

export default Experience;
