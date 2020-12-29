import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import { TiArrowRightThick, TiSocialGithub } from "react-icons/ti";

Project.propTypes = {};

function Project(props) {
  return (
    <section className="project">
      <div className="grid wide">
        <div className="row">
          <div className="col l-12 m-12">
            <h1 className="heading">Project</h1>
          </div>
          <div className="col l-12 c-12 m-12">
            <div className="desc__item">
              <div className="icon">
                <TiArrowRightThick></TiArrowRightThick>
              </div>
              <p className="education__desc">
                Building "UIT market"{" "}
                <a
                  href="https://github.com/hieuth1997/uit-market-client"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Client site
                </a>{" "}
                and{" "}
                <a
                  href="https://github.com/hieuth1997/uit-market-admin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Admin site
                </a>{" "}
                using <strong>ReactJS </strong>
                (project by learning)
              </p>
            </div>
            <div className="desc__item">
              <div className="icon">
                <TiArrowRightThick></TiArrowRightThick>
              </div>
              <p className="education__desc">
                Building "Web E-commerce "{" "}
                <a
                  href="https://github.com/hieuth1997/uit-insurance-client"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Client site
                </a>{" "}
                using <strong>NextJS and ExpressJS </strong>
                (project in School)
              </p>
            </div>
            <div className="desc__item">
              <div className="icon">
                <TiArrowRightThick></TiArrowRightThick>
              </div>
              <p className="education__desc">
                Building "CRUD REST API"{" "}
                <a
                  href="https://github.com/hieuth1997/blog-rest-api"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Backend
                </a>{" "}
                using <strong>ExpressJS </strong>
                (project by learning)
              </p>
            </div>
            <div className="desc__item">
              <div className="icon">
                <TiArrowRightThick></TiArrowRightThick>
              </div>
              <p className="education__desc">
                Design "real estate "{" "}
                <a
                  href="https://silvercreekluxuryrealestate.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Website
                </a>{" "}
                using <strong>Web box </strong>
                (project in Company)
              </p>
            </div>
            <div className="desc__item">
              <div className="icon">
                <TiSocialGithub></TiSocialGithub>
              </div>
              <p className="education__desc">
                Others project in my internship program and working but{" "}
                <strong>Private Internal</strong>
              </p>
            </div>
            <div className="desc__item">
              <div className="icon">
                <TiSocialGithub></TiSocialGithub>
              </div>
              <p className="education__desc">
                Design "my Cv Online" with <strong>ReactJS</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
