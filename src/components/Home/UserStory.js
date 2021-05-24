import React, { useState } from 'react';
import Decoration from "../../assets/Decoration.svg";


function UserStory() {
    const [showText, setShowText] = useState(1);

    const textMapper = {
        1: <div>page 1 fundacjom
            <button onClick={() => setShowText(1)}> page 1</button>
            <button onClick={() => setShowText(2)}> page 2</button>
            </div>,
        2: <div>page2 fundacjom
        <button onClick={() => setShowText(1)}> page 1</button>
        <button onClick={() => setShowText(2)}> page 2</button>
        </div>,
        3: <div> page 1 organzacjom
            <button onClick={() => setShowText(3)}> page 1</button>
            <button onClick={() => setShowText(4)}> page 2</button>
            <button onClick={() => setShowText(5)}> page 3</button>
        </div>,
        4: <div> page 2 organzacjom
        <button onClick={() => setShowText(3)}> page 1</button>
        <button onClick={() => setShowText(4)}> page 2</button>
        <button onClick={() => setShowText(5)}> page 3</button>
        </div>,
        5: <div> page 3 organzacjom
        <button onClick={() => setShowText(3)}> page 1</button>
        <button onClick={() => setShowText(4)}> page 2</button>
        <button onClick={() => setShowText(5)}> page 3</button>
        </div>,
        6: <div> zbiorkom </div>
    }

    return (
        <div id="userStory" className="useStory">
            <h1>Wystarczą 4 proste kroki</h1>
            <img src={Decoration} alt="dekoracja" />
            <div>
                <button onClick={() => setShowText(1)}>Fundacjom</button>
                <button onClick={() => setShowText(3)}>Organizacjom pozarządowym</button>
                <button onClick={() => setShowText(6)}>Lokalnym zbiórkom</button>
            </div>
            <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>

            {showText ? (textMapper[showText]) : null}

        </div>
    )
}

export default UserStory
