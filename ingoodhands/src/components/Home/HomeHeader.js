import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Decoration from "../../assets/Decoration.svg";
import HomeHero from '../../assets/HomeHero.jpg';

function HomeHeader() {
    return (
        <header>
            <img src={HomeHero} alt="pudło" />
            <div>
                <ul className="nav_1">
                    <li>
                        <Link to="/rejestracja">Zaloguj</Link>
                    </li>
                    <li>
                        <Link to="/logowanie">Załóz konto</Link>
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
                            to="section2"
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
                            to="section2"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Kontakt
                            </ScrollLink>
                    </li>
                </ul>
                <div >
                    <h1>Zacznij pomagać!</h1>
                    <h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <img src={Decoration} alt="decoration" />
                    <div>
                        <button className="btn_give">
                            <Link to="/logowanie">ODDAJ RZECZY </Link>
                        </button>
                        <button>
                            <Link to="/logowanie">ZORGANIZUJ ZBIÓRKĘ </Link>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HomeHeader
