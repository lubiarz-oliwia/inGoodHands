import React from 'react';
import { Link } from "react-router-dom";
import Header from './Header';
import Nav from './Nav';

function HomeHeader() {
    return (
        <header>
            <div>
                <Nav />
                <div className="mainHeader">
                    <Header h1_text={"Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce"} />
                    <div className="for_btns">
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

export default HomeHeader;
