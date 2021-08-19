import React from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css';

const ContactForm = () => {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_ne5n7yh', 'template_nt6cznd', e.target, 'user_aX55jiTaYPstzjN2IahRK')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
        }

    return (
        <div className="contact-container">
            <div className="form">
                <div className="contact-info">
                <form className="contact-form" onSubmit={sendEmail}>
                    <span className="circle"></span><span className="circle"></span>
                </form>
                </div>
            </div>
        </div>
                
    );
}

export default ContactForm;
