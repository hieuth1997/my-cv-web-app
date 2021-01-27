import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAddressCard,
  faDragon,
  faMapMarkedAlt,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faGithub,
  faNodeJs,
  faReact,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons';
Profile.propTypes = {};

function Profile(props) {
  return (
    <section className="start">
      <div className=" grid wide">
        <div className="row">
          <div className="col l-12 m-12 c-12">
            <div className="about">
              <div className="about__wrapper">
                <h1 className="name__item">
                  {' '}
                  NGUYEN TRONG<span> HIEU</span>
                </h1>
                <div className="position__wrapper">
                  <div className="position__icon">
                    <FontAwesomeIcon icon={faAddressCard}></FontAwesomeIcon>
                  </div>
                  <p className="position__text">web developer - junier Level</p>
                </div>
                <div className="address__wrapper">
                  <div className="icon address__icon ">
                    <FontAwesomeIcon icon={faMapMarkedAlt}></FontAwesomeIcon>
                  </div>
                  <p className="address__text">
                    130/26, 9 street number, 9 ward, Go Vap, HCM CITY, 70000 -
                    <a
                      className="gmail__text"
                      href="mailto:hieuth1997@gmail.com"
                      rel="noreferrer"
                      target="_blank"
                    >
                      {' '}
                      hieuth1997@gmail.com{' '}
                    </a>
                  </p>
                </div>
                <div className="intro__wrapper">
                  <p className="introduce__text">
                    Welcome Employers to visit my CV online .{' '}
                  </p>
                  <p className="emphasize">
                    "Everything you can imagine is real. Just alway imagine :))"
                  </p>
                </div>
                <div className="backend__wrapper flex">
                  <div className="backend__icon icon">
                    <FontAwesomeIcon icon={faNodeJs}></FontAwesomeIcon>
                  </div>
                  <p className="backend__text">
                    <strong>Back-End:</strong> I'm 4 months experienced with
                    <strong>
                      {' '}
                      Javascript, Express, MongoDb, Rest API ..etc
                    </strong>{' '}
                    on <strong>NodeJS </strong>
                  </p>
                </div>
                <div className="frontend__wrapper flex">
                  <div className="frontend__icon icon">
                    <FontAwesomeIcon icon={faReact}></FontAwesomeIcon>
                  </div>
                  <p className="frontend__text">
                    <strong>Front-End:</strong> I'm than 1 years experienced in
                    on <strong>ReactJS library </strong>
                    using with <strong>Redux, Axios, Ant-design, ..etc</strong>
                  </p>
                </div>
                <div className="conclusion__wrapper flex">
                  <p className="conclusion">Besides, I am a anime fan boy </p>
                  <div className="icon anime__icon">
                    <FontAwesomeIcon icon={faDragon}></FontAwesomeIcon>
                  </div>
                  <div className="icon anime__icon">
                    <FontAwesomeIcon icon={faDragon}></FontAwesomeIcon>
                  </div>
                  <p className=" "> ( ^.^ )</p>
                  <div className="icon anime__icon">
                    <FontAwesomeIcon icon={faDragon}></FontAwesomeIcon>
                  </div>
                  <div className="icon anime__icon">
                    <FontAwesomeIcon icon={faDragon}></FontAwesomeIcon>
                  </div>
                </div>
                <div className="social__wrapper">
                  <a
                    className="social__link"
                    href="https://github.com/hieuth1997"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <div className="icon social__icon">
                      <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                    </div>
                  </a>
                  <a
                    className="social__link"
                    href="https://www.facebook.com/hieuth1997/"
                    rel="noreferrer"
                    target="_blank"
                    id="facebook"
                  >
                    <div className="icon social__icon">
                      <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                    </div>
                  </a>
                  <a
                    className="social__link"
                    href="https://t.me/hieuth1997"
                    rel="noreferrer"
                    target="_blank"
                    id="telegram"
                  >
                    <div className="icon social__icon">
                      <FontAwesomeIcon icon={faTelegram}></FontAwesomeIcon>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
