import React from 'react';
import profilePic from '../../assets/images/profile-pic.jpg'

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
export default function About() {
  return (
    <div >
      <h2>About Me</h2>
      <div className='about-me-content-container'>
        <img className='profile-pic' src={profilePic} alt='Picture of Daniel Vargas' />
        <p className='bio'>I'm Daniel Vargas, a 24-year old Research Technician from Raleigh who is looking to make a switch to back-end software developing. I graduated from UNC Chapel Hill in 2021 with a B.S. in Bology and a minor in Chemistry. Since then I have been working in a genetic research laboratory at UNC Chapel Hill, where I study the effects of pollutants on the respiratory system. While working I have been working to make the change to Software Development and am currently completing a Full-Stack Web Development bootcamp At UNC Charlotte where I have been able to develop and practice new skills. I will be a full-stack developer, but my strengths lean more towards back-end design. I'll be graduating in April and am looking forward to my new future career. </p>
      </div>
    </div>
  );
}
