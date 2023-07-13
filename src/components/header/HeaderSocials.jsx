import React from 'react';
import {BsLinkedin, BsGithub} from 'react-icons/bs';


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/lillianmiiri/' target='_blank'> <BsLinkedin/> </a>
        <a href='https://github.com/Lilwm' target='_blank'><BsGithub/></a>    
    </div>
  )
}

export default HeaderSocials