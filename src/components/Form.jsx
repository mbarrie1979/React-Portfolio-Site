import { useState } from 'react';


import { checkPassword, validateEmail } from '../utils/helpers';

function Form() {

    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;


        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'userName') {
            setUserName(inputValue);
        } else {
            setPassword(inputValue);
        }
    };

    const handleFormSubmit = (e) => {

        e.preventDefault();


        if (!validateEmail(email) || !userName) {
            setErrorMessage('Email or username is invalid');
            return;

        }
        if (!checkPassword(password)) {
            setErrorMessage(
                `Choose a more secure password for the account: ${userName}`
            );
            return;
        }
        alert(`Hello ${userName}`);

        setUserName('');
        setPassword('');
        setEmail('');
    };

    return (
        <div className="container text-center">
            <h1>Let's Keep in Touch!</h1>
            <form className="form row" onSubmit={handleFormSubmit}>
                <input
                    className='col-8'
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="email"
                    autoComplete="off"
                />
                <input
                    className='col-8'
                    value={userName}
                    name="userName"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="username"
                    autoComplete="off"
                />
                <input
                    className='col-8'
                    value={password}
                    name="password"
                    onChange={handleInputChange}
                    type="password"
                    placeholder="password"
                    autoComplete="off"
                />
                <button className="btn btn-success col-2" type="submit">Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
    );
}

export default Form;
