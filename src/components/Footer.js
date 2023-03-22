import React from 'react';
import '../styles/Footer.css';
import { FaGithub, FaLinkedin, FaStackOverflow, FaRegEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <div className='footer-container'>
            <ul className="vertical menu footer-list">
                <li>
                    <a href="mailto:vargasdm21@gmail.com" target="_blank"><FaRegEnvelope /> Email</a>
                </li>
                <li>
                    <a href="https://github.com/vargasdm" target="_blank"> <FaGithub /> Github</a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/daniel-vargas-509a3a25b/" target="_blank"><FaLinkedin /> LinkedIn</a>
                </li>
                <li>
                    <a href="https://stackoverflow.com/users/21378713/vargasdm" target="_blank"><FaStackOverflow /> Stack Overflow</a>
                </li>
            </ul>
        </div>
    )
}
