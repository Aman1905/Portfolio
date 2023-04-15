import React from 'react'
import { NavLink } from 'react-router-dom'

const Data = () => {
  return (
    <div className='home__data'>
        <h2 className='home__subtitle'>
        नमस्कार सर्वेभ्यः 🙏
          {/* image in svg */}
        </h2>
        <h1 className='home__title'>Aman Chopra</h1>
        <p className='home__description'>
          Developer | Cloud and DevOps Engineer | Technical Writer | Java Programmer | Product Enthusiast | Loves to serve Developer Communities.
        </p>

        <NavLink to='/contact' className='button button--flex'>Let's Connect  {/* image in svg */} </NavLink>
    </div>
  )
}

export default Data