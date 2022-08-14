import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
    
    return (
        <nav>
            <ul className="flex-row">
            <li className="mx-2">
                <Link to="/">About Me</Link>
            </li>
            <li className = "mx-2" >
                <Link to="/portfolio">Portfolio</Link>
            </li>
            <li className = "mx-2" >
                <Link to="/contact">Contact</Link>
            </li>
            <li className = "mx-2" >
                <Link to="/resume">Resume</Link>
            </li>
            </ul>  
        </nav>
    )
}

export default Nav;