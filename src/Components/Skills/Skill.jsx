import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import { IconContext } from "react-icons";
import {
  DiJsBadge,
  DiNpm,
  DiNodejs,
  DiSass,
  DiReact,
  DiDocker,
  DiGit,
  DiMsqlServer,
  DiDotnet,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import { TiPin } from "react-icons/ti";

Skill.propTypes = {};

function Skill(props) {
  return (
    <section className="skill">
      <div className="grid wide">
        <div className="row">
          <div className="col l-12 m-12">
            <h1 className="heading">Skills</h1>
            <p className="title">Programing languages and Libraries.</p>
          </div>
          <div className="col l-12 c-12 m-12">
            <div className="devicon">
              <ul className="icon__wrappper">
                <li className="icon__item">
                  <IconContext.Provider value={{ color: "yellow" }}>
                    <div>
                      <DiJsBadge />
                    </div>
                  </IconContext.Provider>
                </li>
                <li className="icon__item">
                  <IconContext.Provider value={{ color: "red" }}>
                    <div>
                      <DiNpm />
                    </div>
                  </IconContext.Provider>
                </li>{" "}
                <li className="icon__item">
                  <IconContext.Provider value={{ color: "green" }}>
                    <div>
                      <DiNodejs />
                    </div>
                  </IconContext.Provider>
                </li>{" "}
                <li className="icon__item">
                  <IconContext.Provider value={{ color: "pink" }}>
                    <div>
                      <DiSass />
                    </div>
                  </IconContext.Provider>
                </li>{" "}
                <li className="icon__item">
                  <IconContext.Provider value={{ color: "blue" }}>
                    <div>
                      <DiReact />
                    </div>
                  </IconContext.Provider>
                </li>{" "}
                <li className="icon__item">
                  <IconContext.Provider value={{ color: "blue" }}>
                    <div>
                      <DiDocker />
                    </div>
                  </IconContext.Provider>
                </li>{" "}
                <li className="icon__item">
                  <IconContext.Provider value={{ color: "red" }}>
                    <div>
                      <DiHtml5 />
                    </div>
                  </IconContext.Provider>
                </li>{" "}
                <li className="icon__item">
                  <IconContext.Provider value={{ color: "blue" }}>
                    <div>
                      <DiCss3 />
                    </div>
                  </IconContext.Provider>
                </li>{" "}
                <li className="icon__item">
                  <IconContext.Provider value={{ color: "black" }}>
                    <div>
                      <DiGit />
                    </div>
                  </IconContext.Provider>
                </li>{" "}
                <li className="icon__item">
                  <IconContext.Provider value={{ color: "blue" }}>
                    <div>
                      <DiDotnet />
                    </div>
                  </IconContext.Provider>
                </li>
                <li className="icon__item">
                  <IconContext.Provider value={{ color: "RED", title: "msql" }}>
                    <div>
                      <DiMsqlServer />
                    </div>
                  </IconContext.Provider>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col l-12">
          <p className="title">workflow.</p>
          <div className="desc__item">
            <div className="icon">
              <TiPin></TiPin>
            </div>
            <p className="education__desc">Git, Bicbucket for Teamwork</p>
          </div>
          <div className="desc__item">
            <div className="icon">
              <TiPin></TiPin>
            </div>
            <p className="education__desc">Reponsive Web design</p>
          </div>
          <div className="desc__item">
            <div className="icon">
              <TiPin></TiPin>
            </div>
            <p className="education__desc">Trello, datagram</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;
