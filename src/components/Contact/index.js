import './index.scss';
import Loader from 'react-loaders';
import Animation from '../Animation';
import { useEffect, useState } from 'react';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <Animation letterClass={letterClass} strArr={['C','o','n','t','a','c','t',' ','m','e']} idx={15}/>
                    </h1>
                    <p>
                        Let's connect! Feel free to use the form below to contact me about any opportunities, projects or questions/concerns you may have.
                    </p>
                    <div className='contact-form'>
                        <form>
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
                                    <input className='flat-button' type='submit' value='SEND'/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type='line-scale-pulse-out-rapid'/>
        </>
    )
}

export default Contact;