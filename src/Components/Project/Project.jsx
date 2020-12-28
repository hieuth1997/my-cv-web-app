import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import { TiArrowRightThick } from "react-icons/ti";

Project.propTypes = {};

function Project(props) {
  return (
    <section className="skill">
      <div className="grid wide">
        <div className="row">
          <div className="col l-12 m-12">
            <h1 className="heading">Project</h1>
          </div>
          <div className="col l-12 c-12 m-12"></div>
        </div>
      </div>
    </section>
  );
}

export default Project;
