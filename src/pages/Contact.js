import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

import { validateEmail } from '../utils/helpers';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_xzhxq34', 'template_dkju3ol', form.current, 'S0FmQ5uTOn6TyOpDY')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    
    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required.`);
                } else {
                    setErrorMessage('');
            }
            }
        }  
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }
    
    return (
        <section>
          <h1 data-testid="h1tag">Contact me</h1>
          <form id="contact-form" ref={form} onSubmit={sendEmail}>
            <div>
                <label htmlFor="name">Name:</label><br />
                <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
            </div>
            <div>
                <label htmlFor="email">Email address:</label><br />
                <input type="email" defaultValue={email} onBlur={handleChange} name="email"/>
            </div>
            <div>
                <label htmlFor="message">Message:</label><br />
                <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
                {errorMessage && (
                    <div>
                        <p className='error-text'>{errorMessage}</p>
                    </div>
                )}
            </div>
            <button data-testid="button" type="submit">Submit</button>
          </form>
        </section>
      )
}

export default ContactForm;