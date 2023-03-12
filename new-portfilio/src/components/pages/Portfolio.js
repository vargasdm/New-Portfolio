import React from 'react';
import Card from '../Card';

const projects = [
  {
    id: 1,
    name: 'In-or-Out',
    screenshot:'../../assets/images/in-or-out.jpg',
    deployed: 'https://vargasdm.github.io/In-or-Out/',
    repo: 'https://github.com/vargasdm/In-or-Out',
  },
  {
    id: 2,
    name: 'Portfolio',
    screenshot: '#',
    deployed: '#',
    repo: 'https://github.com/vargasdm/New-Portfolio',
  },
  {
    id: 3,
    name: 'Text Editor',
    screenshot:'../../assets/images/jate.jpg',
    deployed: 'https://jatechallenge.herokuapp.com/',
    repo: 'https://github.com/vargasdm/Text-Editor',
  },
  {
    id: 4,
    name: 'Tech Blog',
    screenshot:'../../assets/images/tech-blog.jpg',
    deployed: 'https://guarded-forest-85262.herokuapp.com/',
    repo: 'https://github.com/vargasdm/Tech-Blog',
  },
  {
    id: 5,
    name: 'Employee Tracker',
    screenshot:'../../assets/images/employee-tracker.jpg',
    // this app doesn't have a front-end deployed app
    deployed: 'https://github.com/vargasdm/Employee-Tracker',
    repo: 'https://github.com/vargasdm/Employee-Tracker',
  },
  {
    id: 6,
    name: 'E-commerce Backend',
    screenshot:'../../assets/images/e-commerce-backend.jpg',
    // this app doesn't have a front-end deployed app
    deployed: 'https://github.com/vargasdm/E-commerce-Back-End',
    repo: 'https://github.com/vargasdm/E-commerce-Back-End',
  },

];

export default function Portfolio() {
  return (
    <div>
      <h2>Portfolio</h2>
      <div>
        <Card projects={projects}/>
      </div>
    </div>
  );
}