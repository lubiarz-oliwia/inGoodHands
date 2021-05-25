import React from 'react';
import Decoration from "../../assets/Decoration.svg";

function Header({h1_text}) {
    return (
        <div className="for_header">
        <h1 className="header_h1"> {h1_text} </h1>
        <img className="img_decoration" src={Decoration} alt="decoration"/>
        </div>
    )
}

export default Header
