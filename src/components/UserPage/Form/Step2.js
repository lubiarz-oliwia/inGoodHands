import React, { useState } from 'react'
import FormHeader from './FormHeader';

function Step2({ navigation, dataForm, setData }) {
    const [error, setError] = useState("");

    const { bagsAmount } = dataForm;    
    const { next, previous } = navigation;
    const bags = ["wybierz", 1, 2, 3, 4, 5];

    const handleNumberChange = (e) => {
        if (e.target.value === "wybierz") {
            setError("wybierz pole");
            setData(prevState => ({ ...prevState, bagsAmount: bags[0] }));
        } else {
            setError("");
            setData(prevState => ({ ...prevState, bagsAmount: e.target.value }));
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(bagsAmount);
        if (bagsAmount === "wybierz" || bagsAmount === "") {
            setError("Wybierz liczbę worków!");
            setData(prevState => ({ ...prevState, bagsAmount: bags[0] }));
        }
        else {
            next();
        }
    }

    return (
        <>
        <FormHeader 
        formHeader_h1={"Ważne!"}
        formHeader_h2={"Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ."}
        />
        <form className="steps_form">
            <h1>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h1>
            <label>Liczba 60l worków:</label>
            <select value={bagsAmount} onChange={handleNumberChange}>
                {bags.map((item, index) => {
                    return (
                        <option
                            value={item}
                        >{item}</option>
                    )
                })
                }
            </select>
            {error && <p className="steps_error">{error}</p>}
            <div className="steps_buttons">
            <button 
            className="steps_button" 
            onClick={previous}>
                Wróć
                </button>
            <button 
            className="steps_button" 
            onClick={handleSubmit}>
                Dalej
                </button>
            </div>
        </form>
        </>
    )
}

export default Step2
