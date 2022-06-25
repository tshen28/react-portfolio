import React, { useState } from 'react'
import '../../styles/Contact.css'

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [popup, setPopup] = useState('');

    const handleInputChange = (e) => {
        const [input, value] = e.target;
        if (input === 'name') {
            setName(value);
        }
        if (input === 'email') {
            setEmail(value);
        }
        if (input === 'message') {
            setMessage(value);
        }
    };

    const handlePopups = (e) => {
        if (e.target.name === 'name') {
            if (name) {
                setPopup('');
            } else {
                setPopup("Please enter a name.");
            }
        } else if (e.target.name === 'message') {
            if (message) {
                setPopup('');
            } else {
                setPopup("Please enter a message.");
            }
        } else {
            if (email) {
                if (/^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/.test(email)) {
                    setPopup('');
                } else {
                    setPopup("Invalid email address.")
                }
            } else {
                setPopup("Please enter a valid email address.")
            }
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !message) {
            alert('Missing input fields!')
        } else {
            alert('Message sent!')
        }
        setName('');
        setEmail('');
        setMessage('');
    }

    return (
        <section>
            <h1>Contact Me</h1>
            <form className='form'>
                <input
                    value={name}
                    name="name"
                    onChange={handleInputChange}
                    onMouseLeave={handlePopups}
                    type="text"
                    placeholder="Name"
                />
                <input
                    value={name}
                    name="email"
                    onChange={handleInputChange}
                    onMouseLeave={handlePopups}
                    type="text"
                    placeholder="Email"
                />
                <textarea
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    onMouseLeave={handlePopups}
                    placeholder="Message"
                />
                <br></br>
                <p>{popup}</p>
                <br></br>
                <button type="button" onClick={handleFormSubmit}>Submit</button>
            </form>
        </section>
    );
}

export default Contact