import React from 'react'
import DropDownList from './DropDownList'

function Step1({ setForm, formData, navigation }) {
    const giveAways = ["ubrania, które nadają się do ponownego użycia", "ubrania, do wyrzucenia", "zabawki", "książki", "inne"];
    const { next } = navigation;
    const { giveAway } = formData;

    return (
        <>
            <form>
                <h1>Zaznacz co chcesz oddać:</h1>
                <DropDownList data={giveAways} name="giveAway" value={giveAway} onChange={setForm} />
            </form>
            <button onClick={next}>Next</button>
        </>
    )
}

export default Step1
