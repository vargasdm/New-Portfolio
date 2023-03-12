import React from 'react';
import { FaGithub, FaBoxOpen } from "react-icons/fa";


export default function Card(props) {
    const cardStyle = {
        width: '18rem',
    };

    return (
        <div className="container">
            <div className="card" style={cardStyle} >
                {props.projects.map(project => (

                    <div key={project.id}>
                        <img
                            className="card-img-top"
                            src={require(`../assets/images/${project.screenshot}.jpg`)}
                            alt="Project screenshot"
                        />
                        <div className="card-body">
                            <h5 className="card-title">{project.name}</h5>
                            <p>Deployed App: <a href={project.deployed} className="card-text"> <FaBoxOpen /></a></p>
                            <p>GitHub repo: <a href={project.repo} className="card-text"> <FaGithub /></a></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}