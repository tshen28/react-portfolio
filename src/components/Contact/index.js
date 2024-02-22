import './index.scss';
import Loader from 'react-loaders';
import Animation from '../Animation';
import { useEffect, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    const refForm = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_mifdty3', 'template_t3gxr7f', refForm.current, {
            publicKey: 'KWJFX1Q0gre7V-Y6s'
        }).then(() => {
            alert('Message sent!');
            window.location.reload(false);
        }, () => {
            alert('Failed to send message, please try again.')
        });
    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <Animation letterClass={letterClass} strArr={['C','o','n','t','a','c','t',' ','m','e']} idx={15}/>
                    </h1>
                    <p>
                        Let's connect! Feel free to use the form below to contact me about any opportunities, projects or questions you may have.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul className='form-list'>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input type='text' name='subject' placeholder='Subject' required />
                                </li>
                                <li>
                                    <textarea name='message' placeholder='Message'/>
                                </li>
                                <li>
                                    <input className='flat-button' type='submit' value='SEND' />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type='ball-scale-ripple'/>
        </>
    )
}

export default Contact;