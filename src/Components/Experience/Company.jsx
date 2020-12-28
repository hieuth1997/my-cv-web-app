import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";

Company.propTypes = {};

function Company(props) {
  const { name, link, position, timeserving, description } = props;
  return (
    <Fragment>
      <div className="col c-12 l-8 m-12">
        <h3 className="university">
          <a
            href={link}
            className="university__link"
            target="_blank"
            rel="noreferrer"
          >
            {name}
          </a>
        </h3>
        <p className="education__title">{position}</p>
        <div className="desc__item">
          <div className="icon">
            <FontAwesomeIcon icon={faBookOpen}></FontAwesomeIcon>
          </div>
          <p className="education__desc">
            When I was a Student, My university was studied a lot of knowledge
            in web security, HTTP method... I was feeling really interested in
            web development and decided to choose Web programing for my future
            job
          </p>
        </div>
        <div className="desc__item">
          <div className="icon">
            <FontAwesomeIcon icon={faBookOpen}></FontAwesomeIcon>
          </div>
          <p className="education__desc">
            After 4.5 years of university, I chose web application as a
            specialized project and I reached <strong>9/10</strong> point in my
            E-commerce website project.
          </p>
        </div>
        <div className="desc__item">
          <div className="icon">
            <FontAwesomeIcon icon={faBookOpen}></FontAwesomeIcon>
          </div>
          <p className="education__desc">
            I have received 2 encouragement scholarship &#40;1 and 2
            semester&#41; my GPA <strong>7.2/10.</strong> Besides, I have had{" "}
            <strong>685/990 TOEIC</strong> Certificate
          </p>
        </div>
      </div>
      <div className="col c-12 l-4 m-12">
        <div className="time">
          <p className="time-desc">{timeserving}</p>
        </div>
      </div>
    </Fragment>
  );
}

export default Company;
