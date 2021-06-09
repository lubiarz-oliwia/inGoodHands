import React from 'react';
import { Link } from "react-router-dom";
import Header from '../Home/Header';
import { Link as ScrollLink } from "react-scroll";

function Header2() {

    const getUserName = () => {
        const form = JSON.parse(localStorage.getItem('user'));
        if (form) {
            return form.email;
        }
        return '';
    }

    return (
        <header className="header2">
            <div>
                <ul className="nav_1">
                    <li>
                        Cześć {getUserName()}
                    </li>
                    <li>
                        <Link to="/wylogowano">Wyloguj się</Link>
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
                            <Link to="/">Start</Link>
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
                <div className="mainHeader2">
                    <Header 
                    h1_text={"Oddaj rzeczy, których juz nie chcesz POTRZEBUJĄCYM"} 
                    />
                </div>
            </div>
        </header>
    )
}

export default Header2
