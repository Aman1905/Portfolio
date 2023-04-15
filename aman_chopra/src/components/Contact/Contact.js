import React from 'react'
import { NavLink } from 'react-router-dom'
import './Contact.css'

const Contact = () => {
  return (
    <section className='contact section' id='contact'>
      <h2 className='section__title'>Get in touch</h2>
      <span className='section__subtitle'>Contact Me</span>

      <div className='contact__container container grid'>
        <div className='contact__content'>
          <h3 className='contact__title'>Connect with Me</h3>

          <div className='contact__info'>
            <div className='contact__card'>
              <i className='bx bx contact__card-icon'></i>

              <h3 className='contact__card-title'></h3>
              <span className='contact__card-data'></span>

              <NavLink to='#' className='contact__button'>Write Me <i className='bx bx-right-arrow-alt contact__button-icon'></i> </NavLink>
            </div>
          </div>
        </div>

        <div className='contact__content'>
          <h3 className='contact__title'>Write your message</h3>
        </div>
      </div>
    </section>
  )
}

export default Contact