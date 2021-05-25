import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Decoration from "../../assets/Decoration.svg";
import Icon1 from '../../assets/Icon1.svg';
import Icon2 from '../../assets/Icon2.svg';
import Icon3 from '../../assets/Icon3.svg';
import Icon4 from '../../assets/Icon4.svg';
import Header from './Header';

function FourSteps() {
    return (
        <div id="fourSteps" className="fourSteps">
            <Header h1_text={"Wystarczą 4 proste kroki"} />
            <div className="columns">
                <div>
                    <img src={Icon1} alt="koszulka" />
                    <h1>Wybierz rzeczy</h1>
                    <b>__________</b>
                    <p>ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div>
                    <img src={Icon2} alt="torba" />
                    <h1>Spakuj je</h1>
                    <b>__________</b>
                    <p>skorzystaj z worków na śmieci</p>
                </div>
                <div>
                    <img src={Icon3} alt="lupa" />
                    <h1>Zdecyduj komu chcesz pomóc</h1>
                    <b>__________</b>
                    <p>wybierz zaufane miejsce</p>
                </div>
                <div>
                    <img src={Icon4} alt="recycling" />
                    <h1>Zamów kuriera</h1>
                    <b>__________</b>
                    <p>kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>
            <button>
                <Link to="/logowanie">ODDAJ RZECZY </Link>
            </button>
        </div>
    )
}

export default FourSteps
