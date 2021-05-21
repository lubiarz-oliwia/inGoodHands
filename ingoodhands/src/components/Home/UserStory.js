import React, { useState } from 'react';
import Decoration from "../../assets/Decoration.svg";


function UserStory() {
    const [showFoundation, setShowFoundation] = useState(true);
    const [showOrganisation, setShowOrganisation] = useState(false);


    return (
        <div id="userStory" className="useStory">
            <h1>Wystarczą 4 proste kroki</h1>
            <img src={Decoration} alt="dekoracja" />
            <div>
                <button onClick={() => setShowFoundation(!showFoundation) && setShowOrganisation(showOrganisation)}>Fundacjom</button>
                <button onClick={() => setShowOrganisation(!showOrganisation) && setShowFoundation(!showFoundation)}>Organizacjom pozarządowym</button>
                <button>Lokalnym zbiórkom</button>
            </div>
            <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>

            {showFoundation ? (
                <div>
                    fundacjom
                </div>) : null}

            {showOrganisation ? (
                <div>
                    organizacjom
                </div>) : null}


            <div>
                zbiorkom
            </div>
        </div>
    )
}

export default UserStory
