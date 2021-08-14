import React, { useState } from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import Company from './Company';
Experience.propTypes = {};

function Experience(props) {
  const companies = [
    {
      id: 1,
      name: 'Mobifone',
      link: 'https://www.mobifone.vn/',
      position: 'Network Engineer',
      timeserving: 'March 2021 - Now',
      description: [
        {
          id: 1,
          text: 'Main task  control Mobifone metro network in Daklak province: responsible for deploying and trouble shooting network infrastructure ',
        },
        {
          id: 2,
          text: 'Second task build some automation network system: Responsible for develop script,software for automation network system, SDN.(Private Internal.)',
        },
      ],
    },
    {
      id: 2,
      name: 'Real Estate Link',
      link: 'https://www.globalrealestatelink.com/',
      position: 'Web Developer',
      timeserving: 'Jun 2020 - Feb 2021 ( 6 months)',
      description: [
        {
          id: 1,
          text: 'Main task build client web app: Responsible for develop some part of app tool using NextJS, NodeJS. (Private Internal.)',
        },
        {
          id: 2,
          text: 'Second task build some API for client: Responsible for develop API in some module.(Private Internal.)',
        },
        {
          id: 3,
          text: 'Other task design a web real estate platform: Responsible for build web app using WebsiteBox',
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
