import React, { useState } from 'react';
import { addContactFormInfo } from '../../actions/contactForm';
import Decoration from "../../assets/Decoration.svg";

function ContactUs() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [error, setError] = useState({ name: "", email: "", message: "" });
    const [isFormSent, setIsFormSent] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        });
    };

    const handleSubmit = (e) => {
        let { name, email, message } = form;
        e.preventDefault();
        setError({});
        let isError = false;

        if (name.includes(" ") || name.length <= 0) {
            setError(prevState => {
                return {
                    ...prevState,
                    name: "Podane imię jest nieprawidłowe",
                }
            });
            isError = true;
        }
        function validateEmail(email) {
            var re = /\S+@\S+\.\S+/;
            return re.test(email);
        }

        if (!validateEmail(email)) {
            setError(prevState => {
                return {
                    ...prevState,
                    email: "Podany e-mail jest nieprawidłowy",
                }
            });
            isError = true;
        }

        if (message.length < 120) {
            setError(prevState => {
                return {
                    ...prevState,
                    message: "Wiadomość musi mieć conajmniej 120 znaków!",
                }
            });
            isError = true;
        }

        if (!isError) {
            addContactFormInfo(form).then(() => {
                setIsFormSent(true);
            });
        }
    }

    return (
        <>
            <div id="contactUs" className="contactUs">
                <div className="boxForm">
                    <div className="for_header_form">
                        <h1 className="header_h1_form"> Skontaktuj sie z nami </h1>
                        <img className="img_decoration" src={Decoration} alt="decoration" />
                    </div>
                    {isFormSent ? <h1 className="success">Wiadomość została wysłana!
                    Wkrótce się skontaktujemy.</h1> : null}
                    <form
                        className="contactUsForm"
                        onSubmit={handleSubmit}
                    >
                        <div className="group1">
                            <label className="formLabel">
                                Imię
                            <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                />
                                {error.name && <p className="error">{error.name}</p>}
                            </label>
                            <label className="formLabel">
                                Email
                            <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                />
                                {error.email && <p className="error">{error.email}</p>}
                            </label>
                        </div>
                        <div className="group2">
                            <label className="formLabel">
                                Wpisz swoją wiadomość
                        <textarea
                                    type="text"
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                />
                                {error.message && <p className="error">{error.message}</p>}
                            </label>
                        </div>
                        <div className="for_but">
                            <button>Wyślij</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ContactUs;
