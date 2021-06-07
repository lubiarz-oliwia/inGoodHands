import React, { useState } from 'react'

function Step4({ formData, setForm, navigation }) {
    const { street, city, postCode, phone, date, time, note } = formData;
    const { previous, next } = navigation;

    return (
        <>
            <form >
                <div>
                    <label>
                        Ulica
                    <input
                            type="text"
                            name="street"
                            value={street}
                            onChange={setForm}
                        />

                    </label>
                    <label>
                        Miasto
                    <input
                            type="text"
                            name="city"
                            value={city}
                            onChange={setForm}
                        />
                    </label>
                    <label>
                        Kod pocztowy
                    <input
                            type="text"
                            name="postCode"
                            value={postCode}
                            onChange={setForm}
                        />
                    </label>
                    <label>
                        Numer telefonu
                    <input
                            type="text"
                            name="phone"
                            value={phone}
                            onChange={setForm}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Numer telefonu
                    <input
                            type="text"
                            name="date"
                            value={date}
                            onChange={setForm}
                        />
                    </label>
                    <label>
                        Godzina
                    <input
                            type="text"
                            name="time"
                            value={time}
                            onChange={setForm}
                        />
                    </label>
                    <label>
                        Uwagi
                    <input
                            type="text"
                            name="note"
                            value={note}
                            onChange={setForm}
                        />
                    </label>
                </div>
            </form>
            <button onClick={previous}>Previous</button>
            <button onClick={next}>Next</button>
        </>
    )
}

export default Step4
