import React, { useState } from 'react'

function Step2() {
    const bags = ["wybierz", 1, 2, 3, 4, 5]
    const [bagsAmount, setBagsAmount] = useState("--wybierz--");

    const handleBagsAmountChange = (e) => {
        setBagsAmount(e.target.value);
    };

    return (
        <form>
            <h1>Liczba 60l worków:</h1>
            <select value={bagsAmount} onChange={handleBagsAmountChange}>
                {bags.map((item, index) => {
                    return (
                        <option key={index} value={item}>{item}</option>
                    )
                })
                }
            </select>
        </form>
    );
}

export default Step2
