import React, { useState } from 'react'
import RadioList from './RadioList';

function Step1({ setForm, formData, navigation }) {
    const giveAway = ["ubrania, które nadają się do ponownego użycia", "ubrania, do wyrzucenia", "zabawki", "książki", "inne"];
    const { next } = navigation;

    const { giveAwayOption } = formData;

    return (
        <>
            <form
            >
                <h1>Zaznacz co chcesz oddać:</h1>
                <RadioList data={giveAway} name="giveAway" value={giveAwayOption} onChange={e => setForm(e)}  />
            </form>
            <button onClick={next}>Next</button>
        </>
    )
}

export default Step1
