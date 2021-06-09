import React, { useState } from 'react'
import CheckboxList from './CheckboxList';
import DropDownList from './DropDownList';

function Step3({ setForm, navigation, formData }) {
    const locations = ["wybierz", "Poznań", "Warszawa", "Kraków", "Wrocław", "Katowice"]
    const helpGroups = ["dzieciom", "samotnym matkom", "bezdomnym", "niepełnosprawnym", "osobom starszym"]
    const { previous, next } = navigation;

    const { location, helpGroup, localizationSpecific } = formData;

    return (
        <>
            <form>
                <h1>Lokalizacja:</h1>
                <DropDownList data={locations} name="location" value={location} onChange={setForm}/> 
                <label>Komu chcesz pomóc?</label>
                <DropDownList data={helpGroups} name="helpGroup" value={helpGroup} onChange={setForm} />
                <label>Wpisz nazwę konkretnej organizacji (opcjonalnie)</label>
                <input
                    type="text"
                    name="localizationSpecific"
                    value={localizationSpecific}
                    onChange={setForm}
                />
            </form>
            <button onClick={previous}>Previous</button>
            <button onClick={next}>Next</button>
        </>
    )
}

export default Step3
