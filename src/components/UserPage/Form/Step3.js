import React, { useState } from 'react'
import FormHeader from './FormHeader';

function Step3({ navigation, dataForm, setData }) {
    const locations = ["wybierz", "Poznań", "Warszawa", "Kraków", "Wrocław", "Katowice"]
    const helpGroups = ["dzieciom", "samotnym matkom", "bezdomnym", "niepełnosprawnym", "osobom starszym"]
    
    const [error, setError] = useState({ location: "", helpGroup: "" });

    const { location, localizationSpecific, helpGroup } = dataForm;
    const { next, previous } = navigation;

    const handleLocationChange = (e) => {
        if (e.target.value === "wybierz") {
            setData(prevState => ({ ...prevState, location: locations[0] }));
        } else {
            setData(prevState => ({ ...prevState, location: e.target.value }));
        }
    }

    const handleHelpGroupsChange = (e) => {
        setData(prevState => ({ ...prevState, helpGroup: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setError({});
        let isError = false;

        console.log(e.target.value);
        if (location === "wybierz" || location === "") {
            setError(prevState => {
                return {
                    ...prevState,
                    location: "Wybierz lokalizacje",
                }
            });
            isError = true
            setData(prevState => ({ ...prevState, location: locations[0] }));
        }

        if (helpGroup === "") {
            setError(prevState => {
                return {
                    ...prevState,
                    helpGroup: "Wybierz grupe",
                }
            });
            isError = true;
            setData(prevState => ({ ...prevState, helpGroup: "" }));
        }

        if (!isError) {
            next();
        }
    }

    return (
        <>
        <FormHeader 
        formHeader_h1={"Ważne!"}
        formHeader_h2={"Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy."}
        />
        <form className="steps_form">
            <h1>Lokalizacja:</h1>
            <select value={location} onChange={handleLocationChange}>
                {locations.map((item, index) => {
                    return (
                        <option
                            value={item}
                        >{item}
                        </option>
                    )
                })
                }
            </select>
            {error.location && <p className="steps_error">{error.location}</p>}
            <h1>Komu chcesz pomóc?</h1>
            <div className="radio_box" >
                {helpGroups.map((name, index) => {
                    return (
                        <>
                            <input
                                type="radio"
                                name={`option${index + 1}`}
                                value={name}
                                checked={helpGroup === name}
                                onChange={handleHelpGroupsChange}
                            />
                            <label>{name}</label>
                        </>
                    );
                })}
                {error.helpGroup && <p className="steps_error">{error.helpGroup}</p>}
            </div>
            <div className="optional_field">
                <h1>Wpisz nazwę konkretnej organizacji (opcjonalnie)</h1>
                <input
                    type="text"
                    name="localizationSpecific"
                    value={localizationSpecific}
                    onChange={setData}
                />
            </div>
            <div className="steps_buttons">
            <button
            className="steps_button"
                onClick={previous}
                
            >
                Wróć
                </button>
            <button
            className="steps_button"
                onClick={handleSubmit}
            >
                Dalej
                </button>
            </div>
        </form>
        </>
    )
}

export default Step3
