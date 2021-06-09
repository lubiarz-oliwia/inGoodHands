import React from 'react';
import Header from './Home/Header';
import Nav from './Home/Nav';
import { Link } from "react-router-dom";

function Logout() {
    return (
        <div>
            <Nav/>
            <div className="logout_container">
            <Header h1_text="Wylogowanie nastąpiło pomyślnie!"/>
            <button className="btn_give">
                <Link to="/">Strona główna</Link>
            </button>
            </div>
        </div>
    )
}

export default Logout
