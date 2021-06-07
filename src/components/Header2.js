import React from 'react';
import { Link } from "react-router-dom";
import Header from './Home/Header';
import Nav from './Home/Nav';

function Header2() {
    return (
        <header className="header2">
            <div>
                <Nav />
                <div className="mainHeader2">
                    <Header h1_text={"Oddaj rzeczy, których juz nie chcesz POTRZEBUJĄCYM"} />
                </div>
            </div>
        </header>
    )
}

export default Header2
