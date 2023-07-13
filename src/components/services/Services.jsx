import React from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3> UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>User Research & Analysis</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Customer Journey Mapping</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Mobile First and Responsive Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>user experience consulting</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Service Design</p>
            </li>   
          </ul>
        </article>
        {/* End of UI/UX */}

        <article className='service'>
          <div className='service__head'>
            <h3> Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Frontend Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Backend Development</p>
            </li> 
          </ul>
        </article>
        {/* End of Web Development */}

        <article className='service'>
          <div className='service__head'>
            <h3> Data Engineering</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>ETL Pipelines</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Machine Learning Models</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Data Storage</p>
            </li>  
          </ul>
        </article>
        {/* End of Data Engineering */}

      </div>
    </section>
  )
}

export default Services