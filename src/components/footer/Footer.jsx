import React, { useRef } from 'react';
import './footer.css';
import { BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs';
// BsLinkedin

const Footer = () => {
  const facebookRef = useRef();
  const instagramRef = useRef();
  const twitterRef = useRef();
  const linkedinRef = useRef();

  return (
    <section id='footer'>
      <footer>
        <a href='#' className='footer__logo'>LILLIAN MIIRI</a>

        <ul className='permalinks'>
          <li><a href='#'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#experience'>Experience</a></li>
          <li><a href='#services'>Services</a></li>
          <li><a href='#testimonials'>Testimonials</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>

        <div className='footer__socials'>
          <a href='https://instagram.com' ref={instagramRef}> <BsInstagram/> </a>
          <a href='https://facebook.com' ref={facebookRef}><BsFacebook/> </a>
          <a href='https://twitter.com' ref={twitterRef}><BsTwitter/> </a>
          {/* <a href='https://linkedin.com/lillianMiiri' ref={linkedinRef}><BsLinkedin/> </a> */}
        </div>
        <div className='footer__copyright'>
          <small>&copy; Lillian Miiri. All rights Reserved</small>
        </div>
      </footer>
    </section>
  )
}

export default Footer;
