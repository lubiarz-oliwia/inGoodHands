import React, { useState } from 'react'
import DropDownList from './DropDownList'

function Step2({ setForm, navigation, formData }) {
    const bags = ["wybierz", 1, 2, 3, 4, 5]
    const { previous, next } = navigation;

    const { bag } = formData;

    return (
        <>
            <form>
                <h1>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h1>
                <label>Liczba 60l worków:</label>
                <DropDownList data={bags} name="bag" value={bag} onChange={setForm} />
            </form>
            <button onClick={previous}>Previous</button>
            <button onClick={next}>Next</button>
        </>
    );
}

export default Step2
