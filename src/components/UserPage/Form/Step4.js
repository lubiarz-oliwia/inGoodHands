import React, { useState } from 'react'
import FormHeader from './FormHeader';

function Step4({ navigation, dataForm, setData }) {
    const [error, setError] = useState({ street: '', city: '', postalCode: '' });

    const { previous, next } = navigation;
    const { street, city, postalCode, phoneNumber, pickUpNotes } = dataForm;


    const handleChange = (e) => {
        console.log(e);

        setData(prevstate => {
            const { name, value } = e.target;
            return {
                ...prevstate,
                [name]: value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setError({});
        let isError = false;

        if (street === "") {
            setError(prevState => {
                return {
                    ...prevState,
                    street: "Uzupełnij pole",
                }
            });
            isError = true;
            setData(prevState => ({ ...prevState, street: "" }));
        }

        if (city === "") {
            setError(prevState => {
                return {
                    ...prevState,
                    city: "Uzupełnij pole",
                }
            });
            isError = true;
            setData(prevState => ({ ...prevState, city: "" }));
        }

        if (isNaN(phoneNumber)) {
            setError(prevState => {
                return {
                    ...prevState,
                    phoneNumber: "Wpisz poprawny numer telefonu",
                }
            });
            isError = true;
            setData(prevState => ({ ...prevState, phoneNumber: "" }));
        }

        if (postalCode.length != 5 && !postalCode.includes("-")) {
            setError(prevState => {
                return {
                    ...prevState,
                    postalCode: "Wpisz poprawny kod pocztowy",
                }
            });
            isError = true;
            setData(prevState => ({ ...prevState, postalCode: "" }));
        }

        if (!isError) {
            next();
        }

    }

    return (
        <div>
            <FormHeader
                formHeader_h1={"Ważne!"}
                formHeader_h2={"Podaj adres odbioru rzeczy."}
            />
            <form className="steps_form">
                <div className="lastStep_form">
                    <label>
                        Ulica
                    <input
                            type="text"
                            name="street"
                            value={street}
                            onChange={handleChange}
                        />
                    </label>
                    {error.street && <p className="steps_error">{error.street}</p>}
                    <label>
                        Miasto
                    <input
                            type="text"
                            name="city"
                            value={city}
                            onChange={handleChange}
                        />
                    </label>
                    {error.city && <p className="steps_error">{error.city}</p>}
                    <label>
                        Kod pocztowy
                    <input
                            type="text"
                            name="postalCode"
                            value={postalCode}
                            onChange={handleChange}
                        />
                    </label>
                    {error.postalCode && <p className="steps_error">{error.postalCode}</p>}
                    <label>
                        Numer telefonu
                    <input
                            type="text"
                            name="phoneNumber"
                            value={phoneNumber}
                            onChange={handleChange}
                        />
                    </label>
                    {error.phoneNumber && <p className="steps_error">{error.phoneNumber}</p>}

                    <label>
                        Uwagi
                    <input
                            type="text"
                            name="pickUpNotes"
                            value={pickUpNotes}
                            onChange={handleChange}
                        />
                    </label>
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
        </div>
    )
}

export default Step4
