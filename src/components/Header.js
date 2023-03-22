import React, { useState } from 'react';
import '../styles/HeaderComponent.css';


function NavTabs({ currentPage, handlePageChange }) {


    return (

        <ul className="nav nav-tabs">
            <h1>Daniel Vargas</h1>
            <li className="nav-item">
                <a
                    href="#about"
                    onClick={() => handlePageChange('About')}
                    // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={currentPage === 'About' ? 'nav-link active highlighted-link' : 'nav-link'}
                >
                    About Me
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#portfolio"
                    onClick={() => handlePageChange('Portfolio')}
                    // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={currentPage === 'Portfolio' ? 'nav-link active highlighted-link' : 'nav-link'}
                >
                    Portfolio
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#contact"
                    onClick={() => handlePageChange('Contact')}
                    // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={currentPage === 'Contact' ? 'nav-link active highlighted-link' : 'nav-link'}
                >
                    Contact
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#resume"
                    onClick={() => handlePageChange('Resume')}
                    // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={currentPage === 'Resume' ? 'nav-link active highlighted-link' : 'nav-link'}
                >
                    Resume
                </a>
            </li>
        </ul>
    );
}

export default NavTabs;