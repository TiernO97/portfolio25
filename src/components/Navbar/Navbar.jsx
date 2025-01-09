import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import CV from "../../assets/files/CV - Cian Tiernan.pdf";

import "../../styles/components/Navbar/Navbar.scss";

const Navbar = ({scrollTo}) => {

    const [hasScrolled, setHasScrolled] = useState(false);

    

    useEffect(() => {

        const listenToScroll = () => {
            const navbarOffset = 50;
            const currentScroll = window.pageYOffset;
            const isMobile = window.innerWidth < 1025;
            const showIcon = (currentScroll >= navbarOffset) && !isMobile;
    
            if(hasScrolled !== showIcon) {
                setHasScrolled(showIcon)
            }
        }

        window.addEventListener('scroll', listenToScroll)
        return () => {
            window.removeEventListener('scroll', listenToScroll)
        }
    })

    return (
        <div className={`navbar-container ${hasScrolled ? "scrolled": ""}`}>
            <div className="navbar">
                <div className="cv-container">
                    <a href={CV} target="_blank" rel="noopener noreferrer" className="cv-button" >Download my CV!</a>
                </div>
                <nav>
                    <ul>
                        <li onClick={() => scrollTo("home")}><NavLink to="/">Home</NavLink></li>
                        <li onClick={() => scrollTo("about")}><NavLink to="/">About</NavLink></li>
                        <li onClick={() => scrollTo("projects")}><NavLink to="/">Projects</NavLink></li>
                        <li onClick={() => scrollTo("experience")}><NavLink to="/">Experience</NavLink></li>
                        <li onClick={() => scrollTo("contact")}><NavLink to="/">Contact</NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default connect(null, {})(Navbar)
