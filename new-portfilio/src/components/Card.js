import React from 'react';

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
            <div className="card" style={cardStyle}>
                {props.projects.map(projects => (

                    <div>
                        <img
                            className="card-img-top"
                            src={props.project.screenshot}
                            alt="Project screenshot"
                            key={projects.id}
                        />
                        <div className="card-body">
                            <h5 className="card-title">Name: {props.project.name}</h5>
                            <p className="card-text">App: {props.project.deployed}</p>
                            <p className="card-text">GitHub repo: {props.project.repo}</p>
                            <a href="#" className="btn btn-primary">
                                Adopt {props.name}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}