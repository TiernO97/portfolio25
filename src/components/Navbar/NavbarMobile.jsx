import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";

import CV from "../../assets/files/CV - Cian Tiernan.pdf";

// Styles
import "../../styles/components/Navbar/NavbarMobile.scss";

// Actions
import { setIsMobileMenuOpen } from "../../actions/utility";

// Assets
import menuIcon from "../../assets/Icons/bars-solid.svg";
import closeIcon from "../../assets/Icons/close-menu.svg";

const NavbarMobile = (props) => {

    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {

        const listenToScroll = () => {
            const navbarOffset = 50;
            const currentScroll = window.pageYOffset;
            const showIcon = (currentScroll >= navbarOffset);
    
            if(hasScrolled !== showIcon) {
                setHasScrolled(showIcon)
            }
        }

        window.addEventListener('scroll', listenToScroll)
        return () => {
            window.removeEventListener('scroll', listenToScroll)
        }
    })

    const openClose = () => {
        props.setIsMobileMenuOpen(!props.isMobileMenuOpen)
    }

    const goTo = (section) => {
        props.scrollTo(section);

        openClose();
    }

    return (
        <div ref={props.refProp} className={`navbar-mobile-container ${hasScrolled ? "scrolled" : ""} `}>
            <div className="navbar">
                <div className="button-container">
                    <a href={CV} target="_blank" rel="noopener noreferrer" className="cv-button alt">CV</a>
                </div>
                <div className="menu-toggle" onClick={openClose}>
                    {props.isMobileMenuOpen ? <img src={closeIcon} alt="close menu" /> : <img src={menuIcon} alt="menu" />}
                </div>
            </div>
            <nav className={props.isMobileMenuOpen ? 'show' : ''}>
                <ul>
                <li><NavLink onClick={() => goTo("home")} to="/">Home</NavLink></li>
                <li><NavLink onClick={() => goTo("about")} to="/">About</NavLink></li>
                <li><NavLink onClick={() => goTo("projects")} to="/">Projects</NavLink></li>
                <li><NavLink onClick={() => goTo("experience")} to="/">Experience</NavLink></li>
                <li><NavLink onClick={() => goTo("contact")} to="/">Contact</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isMobileMenuOpen: state.utility.isMobileMenuOpen
    }
}

export default connect(mapStateToProps, {
    setIsMobileMenuOpen
})(NavbarMobile)
