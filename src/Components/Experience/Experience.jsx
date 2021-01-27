import React, { useState } from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import Company from './Company';
Experience.propTypes = {};

function Experience(props) {
  const companies = [
    {
      id: 1,
      name: 'Real Estate Link',
      link: 'https://www.globalrealestatelink.com/',
      position: 'Web Developer collaborators',
      timeserving: 'Jun 2020 - Nov 2020 ( 4 months)',
      description: [
        {
          id: 1,
          text:
            'Main task build client web app: Responsible for develop some part of app tool using NextJS, NodeJS. (Private Internal.)',
        },
        {
          id: 2,
          text:
            'Second task build some API for client: Responsible for develop API in some module.(Private Internal.)',
        },
        {
          id: 3,
          text:
            'Other task design a web real estate platform: Responsible for build web app using WebsiteBox',
        },
      ],
    },
    {
      id: 2,
      name: 'Codosa Holding',
      link: 'https://codosaholding.com/',
      position: 'Frontend Web Internship',
      timeserving: 'Jun 2019 - Jan 2020 ( 6 months)',
      description: [
        {
          id: 1,
          text:
            'Participate in develop UI Web for company projects using HTML, CSS, REACTJS, FIREBASE ...etc (Private Internal.)',
        },
        {
          id: 1,
          text:
            'I have gained the teamwork skill, workflow of technology company ',
        },
      ],
    },
  ];
  const companiesUI = companies.map((company) => {
    return (
      <Company
        key={company.id}
        name={company.name}
        position={company.position}
        link={company.link}
        timeserving={company.timeserving}
        description={company.description}
      ></Company>
    );
  });
  return (
    <section className="experience">
      <div className="grid wide"></div>
      <div className="row">
        <div className="col l-12 m-12">
          <h1 className="heading">Experience</h1>
        </div>
        {companiesUI}
      </div>
    </section>
  );
}

export default Experience;
