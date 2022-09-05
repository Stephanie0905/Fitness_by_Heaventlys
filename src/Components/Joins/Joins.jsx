import React, { useRef } from 'react'
import './Joins.css'
import emailjs from '@emailjs/browser'

const Joins = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_n79uhki', 'template_b7h50zd', form.current, 'gcr-neoOg5G_SI4do')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <div className="Join">
        <div className="left-j">
            <hr />
            <div>
                <span className='stroke-text'>Ready to</span>
                <span> level up</span>
            </div>
            <div>
                <span>your body</span>
                <span className="stroke-text"> with us?</span>
            </div>
        </div>
        <div className="right-j">
            <form ref={form} className='email-container' onSubmit={sendEmail}>
                <input type="email" name='user_email' placeholder='Entrez votre adresse mail' />
                <button className="btn btn-j">Joignez nous</button>
            </form>
        </div>
    </div>
  )
}

export default Joins