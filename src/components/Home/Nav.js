import React from 'react'
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

function Nav() {
    return (
        <>
           <ul className="nav_1">
                    <li>
                        <Link to="/logowanie">Zaloguj</Link>
                    </li>
                    <li>
                        <Link to="/rejestracja">Załóz konto</Link>
                    </li>
                </ul>
                <ul className="nav_2">
                    <li>
                        <ScrollLink
                            activeClass="active"
                            to="section1"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Start
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink
                            activeClass="active"
                            to="fourSteps"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            O co chodzi?
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink
                            activeClass="active"
                            to="aboutUs"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            O nas
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink
                            activeClass="active"
                            to="userStory"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Fundacja i organizacje
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink
                            activeClass="active"
                            to="contactUs"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Kontakt
                            </ScrollLink>
                    </li>
                </ul> 
        </>
    )
}

export default Nav
