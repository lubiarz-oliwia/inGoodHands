import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from './Home/Header';
import Nav from './Home/Nav';

function Register() {
    const [form, setForm] = useState({ email: "", password: "", password2: "" });
    const [error, setError] = useState({ email: "", password: "", password2: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        });
    };

    let history = useHistory();

    const handleSubmit = (e) => {
        let { email, password, password2 } = form;
        e.preventDefault();
        setError({});
        let isError = false;

        if (password.length < 6) {
            setError(prevState => {
                return {
                    ...prevState,
                    password: "złe haslo",
                }
            });
            isError = true;
        }

        if (password !== password2) {
            setError(prevState => {
                return {
                    ...prevState,
                    password: "hasla nie sa takie same",
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

        if (!isError) {
            history.push('/oddaj-rzeczy');
        };
    }

    return (
        <>
            <Nav />
            <div className="login_container">
                <Header h1_text="Załóz konto" />
                <form onSubmit={handleSubmit}>
                    <div className="login_form">
                        <label className="formLabel">
                            Email
                        <input
                                type="text"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                            />
                            {error.email && <p className="error">{error.email}</p>}
                        </label>
                        <label className="formLabel">
                            Hasło
                        <input
                                type="text"
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                            />
                            {error.password && <p className="error">{error.password}</p>}
                        </label>
                        <label className="formLabel">
                            Hasło
                        <input
                                type="text"
                                name="password2"
                                value={form.password2}
                                onChange={handleChange}
                            />
                            {error.password && <p className="error">{error.password}</p>}
                        </label>
                    </div>
                    <div className="form_btns">
                        <button>
                            <Link to="/logowanie">Zaloguj</Link>
                        </button>
                        <button type="onSubmit">
                            Załoz konto
                    </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Register
