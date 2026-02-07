import React, { useState } from "react";

const RegistrationForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");

    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [ageError, setAgeError] = useState("");

    const [success, setSuccess] = useState(false);

    const validateName = (value) => {
        if (!value) return 'Укажите имя!';
        if (value.length < 2) return "Графа имя должна содержать больше двух символов";
        return "";
    };

    const validateEmail = (value) => {
        const emailRegex = /[^\s@]+@[^\s@]+\.[^\s@]+/;
        if (!value) return "Укажите Email!";
        if (!emailRegex.test(value)) return "Неверный формат Email";
        return "";
    };

    const validateAge = (value) => {
        if (!value) return 'Укажите возраст!';
        const numAge = Number(value);
        if (isNaN(numAge) || numAge < 18) return 'необходимо быть старше 18 лет!';
        return ''; 
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const nErr = validateName(name);
        const eErr = validateEmail(email);
        const aErr = validateAge(age);

        setNameError(nErr);
        setEmailError(eErr);
        setAgeError(aErr);

        if (!nErr && !aErr && !eErr) {
            setSuccess(true);
            setName('');
            setAge('');
            setEmail('');
        } else {
            setSuccess(false);
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: '20px auto', padding: '15px', border: '1px solid', }}>
            <h2>Форма регистрации</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type='text'
                        placeholder="Имя"
                        value={name}
                        onChange={(e) =>{
                            setName(e.target.value);
                            setNameError(validateName(e.target.value));
                        }}
                        />
                        {nameError && <p style={{color: 'red', fontSize: ' 12px'}}>{nameError}</p>}
                </div>

                <div style={{ marginTop: '10px'}}>
                    <input
                        type='email'
                        placeholder="Email"
                        value={email}
                        onChange={(e) =>{
                            setEmail(e.target.value);
                            setEmailError(validateEmail(e.target.value));
                        }}
                        />
                        {emailError && <p style={{color: 'red', fontSize: ' 12px'}}>{emailError}</p>}
                </div>

                <div style={{ marginTop: '10px'}}>
                    <input
                        type='number'
                        placeholder="Возраст"
                        value={age}
                        onChange={(e) =>{
                            setAge(e.target.value);
                            setAgeError(validateAge(e.target.value));
                        }}
                        />
                        {ageError && <p style={{color: 'red', fontSize: ' 12px'}}>{ageError}</p>}
                </div>

                <button type="submit" style={{ marginTop: '20px' }}>Подтвердить</button>
            </form>
            
            {success && <p style={{ color: 'green', marginTop: '15px' }}>Успешная регистрация</p>}
        </div>
    );
};

export default RegistrationForm;