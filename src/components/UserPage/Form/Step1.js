import React, { useState } from 'react'
import FormHeader from './FormHeader';

function Step1({ navigation, dataForm, setData }) {
    const [error, setError] = useState("");

    const giveAways = ["ubrania, które nadają się do ponownego użycia", "ubrania, do wyrzucenia", "zabawki", "książki", "inne"]
    const { next } = navigation;
    const { checkedState } = dataForm;

    const handleOnChange = (e) => {
        const arrayRemove = (arr, value) => {
            return arr.filter(function (ele) {
                return ele !== value;
            });
        }

        var result = arrayRemove(checkedState, e.target.value)

        if (e.target.checked) {
            setData(prevState => ({ ...prevState, checkedState: [...checkedState, e.target.value] }));
            setError("");
        }
        else {
            setData(prevState => ({ ...prevState, checkedState: result }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (checkedState.length === 0) {
            setError("Dokonaj wyboru!");
        }
        else {
            next();
        }
    }

    return (
        <>
            <FormHeader
                formHeader_h1={"Ważne!!"}
                formHeader_h2={"Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać."}
            />
            <form className="steps_form">
                {giveAways.map((name, index) => {
                    return (
                        <div className="checkboxes" key={index}>
                            <input
                                type="checkbox"
                                name={name}
                                value={name}
                                checked={checkedState.includes(name)}
                                onChange={handleOnChange}
                            />
                            <label>{name}</label>
                        </div>
                    );
                })}
                {error && <p className="steps_error">{error}</p>}
                <button
                    className="steps_button"
                    onClick={handleSubmit}
                    >
                    Dalej
            </button>
            </form>
        </>
    )
}

export default Step1;
