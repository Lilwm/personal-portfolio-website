import React from 'react';
import './contact.css';
import { MdMailOutline } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef ();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_w8eylik', 'template_k3wjwer', form.current, '6j9WAln679tSNP-DF')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdMailOutline className='contact__option-icon'/>
            <h4> Email </h4>
            <h5>lwmiiri@gmail.com</h5>
            <a href='mailto:lwmiiri@gmail.com' target="_blank">Send a Message</a>

          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4> WhatsApp </h4>
            <a href='https://api.whatsapp.com/send?phone=254727091073' target="_blank">WhatsApp me</a>

          </article>

          <article className='contact__option'>
            <BiSolidPhoneCall className='contact__option-icon'/>
            <h4> Call </h4>
            <h5>0727 091 073</h5>
          </article>
        </div>
        {/* End of CONTACT Section */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7'  placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact