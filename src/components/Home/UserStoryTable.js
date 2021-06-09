import React from 'react';

function UserStoryTable({ textGroup }) {

    return (
        <div className="userStoryTables">
            <div className="mainText"> {textGroup['mainText']} </div>
            <div className="rows">
                <div className="row">
                    <div>
                        <h1>{textGroup['line1_h1']}</h1>
                        <p>{textGroup['line1_p']}</p>
                    </div>
                    <p>{textGroup['line1_p2']}</p>
                </div>
                <div className="row">
                    <div>
                        <h1>{textGroup['line2_h1']}</h1>
                        <p>{textGroup['line2_p']}</p>
                    </div>
                    <p>{textGroup['line2_p2']}</p>
                </div>
                <div className="row">
                    <div>
                        <h1>{textGroup['line3_h1']}</h1>
                        <p>{textGroup['line3_p']}</p>
                    </div>
                    <p>{textGroup['line3_p2']}</p>
                </div>
            </div>
        </div>
    )
}

export default UserStoryTable;
