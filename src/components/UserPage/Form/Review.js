import React from 'react'

function Review({ navigation, dataForm }) {

    const {
        checkedState,
        bagsAmount,
        location,
        helpGroup,
        street,
        city,
        postalCode,
        phoneNumber,
        pickUpDate,
        pickUpNotes
    } = dataForm;

    const { next, previous } = navigation;

    return (
        <div className="form_review">
            <h1>Podsumowanie Twojej darowizny</h1>
            <h2>Oddajesz:</h2>
            <p> {`${bagsAmount}`} worki {`${helpGroup}`}, z zawartością: {checkedState.map((item, index) => {
                return (
                    <li key={index}>{item}</li>
                )
            })
            } </p>
            <p>dla lokalizacji: {`${location}`}</p>
            <div className="for_summary">
                <h2>Adres odbioru:</h2>
                <p>Ulica: {`${street}`}</p>
                <p>Miasto: {`${city}`}</p>
                <p>Kod pocztowy: {`${postalCode}`}</p>
                <p>Numer Telefonu: {`${phoneNumber}`}</p>
                <p>Data: {`${pickUpDate}`}</p>
                <p>Uwagi dla kuriera: {`${pickUpNotes}`}</p>
            </div>
            <div className="steps_buttons">
                <button
                    className="steps_button"
                    onClick={previous}>
                    Wróć
                    </button>
                <button
                    className="steps_button"
                    onClick={next}>
                    Wyślij
                </button>
            </div>
        </div>
    )
}

export default Review
