import React, { useState } from 'react';
import Header from './Header';
import { foundation_page1, foundation_page2, organisation_page1, organisation_page2, organisation_page3, locals_page1 } from './data/textGroup';
import UserStoryTable from './UserStoryTable';

function UserStory() {
    const [showText, setShowText] = useState(1);

    const Comp = ({ text, pages }) => {
        return (
            <div>
                <UserStoryTable textGroup={text} />
                {pages && pages.map((el, index) => (
                    <button className={showText == (el) ? "clicked" : "unclicked"} onClick={() => setShowText(el)}> {index + 1} </button>
                ))}
                {/* { pages ? "do something if pages are true" : "do if pages are false"}
                { pages ? "do something if pages are true" : null} 
                { pages && "do something if pages are true"} */}
            </div>
        )
    }

    const textMapper = {
        1: <Comp text={foundation_page1} pages={[1, 2]} />,
        2: <Comp text={foundation_page2} pages={[1, 2]} />,
        3: <Comp text={organisation_page1} pages={[3, 4, 5]} />,
        4: <Comp text={organisation_page2} pages={[3, 4, 5]} />,
        5: <Comp text={organisation_page3} pages={[3, 4, 5]} />,
        6: <Comp text={locals_page1} />,
    }

    return (
        <div id="userStory" className="useStory">
            <Header h1_text={"Komu pomagamy?"} />
            <div>
                <button className={[1, 2].includes(showText) ? "clicked" : "unclicked"} onClick={() => setShowText(1)}>Fundacjom</button>
                <button className={[3, 4, 5].includes(showText) ? "clicked" : "unclicked"} onClick={() => setShowText(3)}>Organizacjom pozarządowym</button>
                <button className={showText == 6 ? "clicked" : "unclicked"} onClick={() => setShowText(6)}>Lokalnym zbiórkom</button>
            </div>
            {showText ? (textMapper[showText]) : null}
        </div>
    )
}

export default UserStory;
