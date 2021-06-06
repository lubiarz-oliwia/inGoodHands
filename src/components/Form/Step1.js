import React, { useState } from 'react'

function Step1() {
    const giveAway = ["ubrania, które nadają się do ponownego użycia", "ubrania, do wyrzucenia", "zabawki", "książki", "inne"];

    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (e) => {
        const { name } = e.target;
        setSelectedOption(name);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                {giveAway.map((item, index) => {
                    return (
                        <div>
                            <input
                                type="checkbox"
                                name={`option${index + 1}`}
                                onChange={handleChange}
                                checked={selectedOption === `option${index + 1}`}
                            />
                            <label key={item}>{item}</label>
                        </div>
                    )
                })}
            </form>
            <button>Dalej</button>
        </>
    )
}

export default Step1
