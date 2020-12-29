import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";

Company.propTypes = {};

function Company(props) {
  const { name, link, position, timeserving, description } = props;
  let listText;
  if (description.length) {
    listText = description.map((desc) => {
      return (
        <div className="desc__item" key={desc.id}>
          <div className="icon">
            <FontAwesomeIcon icon={faBookOpen}></FontAwesomeIcon>
          </div>
          <p className="education__desc">{desc.text}</p>
        </div>
      );
    });
  }
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
        {listText}
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
