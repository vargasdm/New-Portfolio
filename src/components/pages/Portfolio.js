import React from 'react';
import Card from '../Card';

const projects = [
  {
    id: 1,
    name: 'In-or-Out',
    screenshot: 'in-or-out',
    deployed: 'https://vargasdm.github.io/In-or-Out/',
    repo: 'https://github.com/vargasdm/In-or-Out',
  },
  {
    id: 2,
    name: 'Book Search Engine',
    screenshot: 'book-search-engine',
    // this app doesn't have a front-end deployed app
    deployed: 'https://floating-dusk-47990.herokuapp.com/',
    repo: 'https://github.com/vargasdm/Book-Search-Engine',
  },
  {
    id: 3,
    name: 'Text Editor',
    screenshot: 'jate',
    deployed: 'https://jatechallenge.herokuapp.com/',
    repo: 'https://github.com/vargasdm/Text-Editor',
  },
  {
    id: 4,
    name: 'Portfolio',
    screenshot: 'portfolio',
    deployed: 'https://vargasdm.github.io/New-Portfolio/',
    repo: 'https://github.com/vargasdm/New-Portfolio',
  },
  {
    id: 5,
    name: 'Tech Blog',
    screenshot: 'tech-blog',
    deployed: 'https://guarded-forest-85262.herokuapp.com/',
    repo: 'https://github.com/vargasdm/Tech-Blog',
  },
  {
    id: 6,
    name: 'Employee Tracker',
    screenshot: 'employee-tracker',
    // this app doesn't have a front-end deployed app
    deployed: 'https://github.com/vargasdm/Employee-Tracker',
    repo: 'https://github.com/vargasdm/Employee-Tracker',
  },

];

export default function Portfolio() {
  return (
    <div>
      <h2>Portfolio</h2>
      <div className='card-container'>
        <Card projects={projects} />
      </div>
    </div>
  );
}