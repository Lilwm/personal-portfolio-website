import React from 'react';
import './about.css';
import ME from '../../assets/aboutMe.jpeg';
import { FaAward, FaUsers } from 'react-icons/fa';
import { RiFolderShield2Line } from 'react-icons/ri';

const About = () => {
  return (
    <section id='about'>
      <h5> Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About me image'/>
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5> Experience</h5>
              <small> 3+ years</small>
            </article>

            <article className='about__card'>
              <FaUsers className='about__icon'/>
              <h5> Stakeholders</h5>
              <small> worked with over 300+ stakeholders</small>
            </article>

            <article className='about__card'>
              <RiFolderShield2Line className='about__icon'/>
              <h5> projects</h5>
              <small> 20+ Completed projects</small>
            </article>
          </div>
          <p>
          I am a Product Manager with 5+ years of experience in Telecommunications, Digital Payments,
           Internet connectivity, Entertainment and Consumer IoT.
          I have a track record of driving strategic projects and leading high-performing teams to identify unmet customer needs
          and commercialization opportunities. I am passionate about user experience and using technology to bring equality.
          </p>
          <a href='#contact' className='btn btn-primary'> Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About