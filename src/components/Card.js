import React from 'react';
import { FaGithub, FaBoxOpen } from "react-icons/fa";

export default function Card(props) {
    const cardStyle = {
        card: {
            display: 'flex',
            margin: 20,
            background: '#e8eaf6',
            justifyContent: 'space-evenly',
            maxHeight: 400,
            maxWidth: 400,
            height: 'auto',
            width: 'auto'
        },
        heading: {
            background: '#3d2c2e',
            lineHeight: 3.5,
            fontSize: '1.2rem',
            color: '#f5edf0',
            padding: '0 20px',
        },
        content: {
            padding: 20,
        },
    };

    return (
        <div className="container">
            {props.projects.map(project => (
                <div key={project.id} className="card" style={cardStyle.card} >
                    <div >
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
                </div>

            ))}
        </div>
    );
}