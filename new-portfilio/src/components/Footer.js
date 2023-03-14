import React from 'react';
import '../styles/Footer.css';
import { FaGithub, FaLinkedin, FaStackOverflow, FaRegEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <div >
            <ul className="vertical menu footer-list">
                <li><FaRegEnvelope /><a href="mailto:vargasdm21@gmail.com" target="_blank"> Email</a></li>
                <li><FaGithub /><a href="https://github.com/vargasdm" target="_blank"> Github</a></li>
                <li><FaLinkedin /><a href="https://www.linkedin.com/in/daniel-vargas-509a3a25b/" target="_blank"> LinkedIn</a></li>
                <li><FaStackOverflow /><a href="https://stackoverflow.com/users/21378713/vargasdm" target="_blank"> Stack Overflow</a></li>
            </ul>
        </div>
    )
}
