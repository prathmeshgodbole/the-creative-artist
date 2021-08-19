import React from 'react';
import { NavLink } from 'react-router-dom';
import emailjs from 'emailjs-com';
import Shape from '../../assets/shape.png'
import './ContactForm.css';

const ContactForm = () => {
    const sendEmail=(e)=> {
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
        <div class="contact-container">
      <span class="big-circle"></span>
      <img src={Shape} class="square" alt="" />
      <div class="form">
        <div class="contact-info">
          <h3 class="title">Let's get in touch</h3>
          <p class="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum adipisci recusandae praesentium dicta!
          </p>

          <div class="info">
            <div class="information">
            <i class="home fas fa-home"/><p>Nivrutti Colony, Warananagar 416113, Maharashtra</p>
            </div>
            <div class="information">
            <i class="fab fa-mail"/><p>thecreativeartist.com</p>
            </div>
            <div class="information">
            <i class="fab fa-facebook-f"/><p>7517065560</p>
            </div>
          </div>

          <div class="social-media">
            <p>Connect with us :</p>
            <div class="social-icons">
              <NavLink to='' exact><i class="facebook fab fa-facebook-f"></i></NavLink>
              <NavLink to='' exact><i class="twitter fab fa-twitter"></i></NavLink>
              <NavLink to='' exact><i class="instagram fab fa-instagram"></i></NavLink>
              <NavLink to='' exact><i class="linked fab fa-linkedin-in"></i></NavLink>
            </div>
          </div>
        </div>

        <div class="contact-form">
          <span class="circle one"></span>
          <span class="circle two"></span>

          <form  onSubmit={sendEmail} autocomplete="off">
            <h3 class="title">Contact us</h3>
            <div class="input-container">
              <input type="text" name="name" class="input" />
              <label for="">Username</label>
              <span>Username</span>
            </div>
            <div class="input-container">
              <input type="email" name="email" class="input" />
              <label for="">Email</label>
              <span>Email</span>
            </div>
            <div class="input-container">
              <input type="tel" name="phone" class="input" />
              <label for="">Phone</label>
              <span>Phone</span>
            </div>
            <div class="input-container textarea">
              <textarea name="message" class="input"></textarea>
              <label for="">Message</label>
              <span>Message</span>
            </div>
            <input type="submit" value="Send" class="btn" />
          </form>
        </div>
      </div>
    </div>
                
    );
}

export default ContactForm;
