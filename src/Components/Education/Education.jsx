import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';

Education.propTypes = {};

function Education(props) {
  return (
    <section className="education">
      <div className="grid wide">
        <div className="row">
          <div className="col l-12 m-12">
            <h1 className="heading">EDUCATION</h1>
          </div>
          <div className="col c-12 l-8 m-12">
            <h3 className="university">
              <a
                href="https://www.uit.edu.vn/"
                className="university__link"
                target="_blank"
                rel="noreferrer"
              >
                University Of information and Technology
              </a>
            </h3>
            <p className="education__title">
              I graduated with a engineer degree of Network Computer and
              communications, but in Third-year student I developed my career as
              a software Engineer.
            </p>
            <div className="desc__item">
              <div className="icon">
                <FontAwesomeIcon icon={faBookOpen}></FontAwesomeIcon>
              </div>
              <p className="education__desc">
                When I was a Student, My university was studied a lot of
                knowledge in network, routing protocol, SDN. Besides I have many
                knowledge web development by the internship program I was joined
              </p>
            </div>
            <div className="desc__item">
              <div className="icon">
                <FontAwesomeIcon icon={faBookOpen}></FontAwesomeIcon>
              </div>
              <p className="education__desc">
                After 4.5 years of university, I chose web application as a
                specialized project and I reached <strong>9/10</strong> point in
                my E-commerce website project.
              </p>
            </div>
            <div className="desc__item">
              <div className="icon">
                <FontAwesomeIcon icon={faBookOpen}></FontAwesomeIcon>
              </div>
              <p className="education__desc">
                I have received 2 encouragement scholarship &#40;1 and 2
                semester in four years&#41;. My final GPA{' '}
                <strong>2.8/4.</strong> Besides, I can use good English
              </p>
            </div>
            <div className="desc__item">
              <div className="icon">
                <FontAwesomeIcon icon={faBookOpen}></FontAwesomeIcon>
              </div>
              <p className="education__desc">
                I really enjoy my school, where I make new friends and we study
                together.I always proud when I am a UITer{' '}
              </p>
            </div>
          </div>
          <div className="col c-12 l-4 m-12">
            <div className="time">
              <p className="time-desc">August 2015 - June 2020</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
