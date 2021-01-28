import React from 'react';
import './style.scss';
import avatar from './../../assets/images/image/avatar.JPG';
import * as Scroll from 'react-scroll';
import { Link, Element } from 'react-scroll';

function Navigation() {
  return (
    <div className="navigation  ">
      <div className="navigation__wrapper">
        <div className="navigation__top">
          <div className="avatar__wrapper">
            <img src={avatar} alt="my-avatar" className="avatar__item"></img>
          </div>
        </div>

        <div className="nav__wrapper">
          <ul className="nav_bar">
            <li className="nav__item">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="nav__link"
              >
                PROFILE
              </Link>
            </li>
            <li className="nav__item">
              <Link
                className="nav__link"
                activeClass="active"
                to="education"
                spy={true}
                smooth={true}
                duration={500}
                offset={-35}
              >
                EDUCATION
              </Link>
            </li>
            <li className="nav__item">
              <Link
                activeClass="active"
                className="nav__link"
                to="skill"
                spy={true}
                smooth={true}
                duration={500}
                offset={-20}
              >
                Skills
              </Link>
            </li>
            <li className="nav__item">
              <Link
                activeClass="active"
                to="experience"
                spy={true}
                smooth={true}
                duration={500}
                className="nav__link"
                offset={-20}
              >
                EXPERIENCE
              </Link>
            </li>

            <li className="nav__item">
              <Link
                activeClass="active"
                to="project"
                spy={true}
                smooth={true}
                duration={500}
                offset={-20}
                className="nav__link"
              >
                Projects
              </Link>
            </li>
            <li className="nav__item">
              <Link
                activeClass="active"
                to="interest"
                spy={true}
                offset={-20}
                smooth={true}
                duration={500}
                className="nav__link"
              >
                INTERESTS
              </Link>
            </li>
            <li className="nav__item">
              <Link
                activeClass="active"
                to="end"
                spy={true}
                smooth={true}
                duration={500}
                className="nav__link"
              >
                The End
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
