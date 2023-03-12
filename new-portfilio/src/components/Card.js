import React from 'react';
import { FaGithub, FaBoxOpen } from "react-icons/fa";


export default function Card(props) {
    const cardStyle = {
        width: '18rem',
    };

    // Helper function that generates a random width for our placeholder images
    const randomWidth = () => {
        const number = Math.random() * (300 - 200) + 200;
        return number.toString().split('.')[0];
    };

    return (
        <div className="container">
            <p>i am working</p>
            <div className="card" style={cardStyle} >
                {props.projects.map(project => (

                    <div key={project.id}>
                        <img
                            className="card-img-top"
                            src={project.screenshot}
                            alt="Project screenshot"
                        />
                        <div className="card-body">
                            <h5 className="card-title">{project.name}</h5>
                            <p>Deployed App: <a href={project.deployed} className="card-text"> <FaBoxOpen /></a> </p>
                            <p>GitHub repo: <a href={project.repo} className="card-text"> <FaGithub /></a></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}