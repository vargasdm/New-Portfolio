import React from 'react';
import resumeDoc from '../../assets/documents/Vargas-General-Resume.pdf'

export default function Resume() {
    return (
        <div>
            <h2>Resume</h2>
            <p>Click to download my resume here: <a href={resumeDoc} download="vargasdm-resume">!!Resume!!</a></p>
            <div className='proficiencies'>
                <ul className="vertical menu ">
                    <p>Front-End Proficiencies</p>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>JQuery</li>
                    <li>responsive design</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                </ul>
                <ul className="vertical menu">
                    <p>Back-End Proficiencies</p>
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL, Sequelize</li>
                    <li>MongoDB, Mongoose</li>
                    <li>GraphQL</li>
                </ul>
            </div>
        </div>
    );
}