import React, {useState} from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom'

const Header = () => {
  const [Toggle, showMenu] = useState(false);
    return (
      <>
        <header className='header'>
          <nav className='nav container'>
            <NavLink to='/' className='nav__logo'>Aman Chopra</NavLink>

            <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
              <ul className='nav__list grid'>
                <li className='nav__item'>
                  <NavLink to='/' className='nav__link active-link'>
                    <i className='uil uil-estate nav__icon'></i>Home
                  </NavLink>
                </li>
                <li className='nav__item'>
                  <NavLink to='/work' className='nav__link'>
                  <i className='uil uil-briefcase-alt nav__icon'></i>Work
                  </NavLink>
                </li>
                <li className='nav__item'>
                  <NavLink to='/projects' className='nav__link'>
                    <i className='uil uil-scenery nav__icon'></i>Projects
                  </NavLink>
                </li>
                <li className='nav__item'>
                  <NavLink to='/blogs' className='nav__link'>
                    <i className='uil uil-file-alt nav__icon'></i>Blogs
                  </NavLink>
                </li>
                <li className='nav__item'>
                  <NavLink to='/community' className='nav__link'>
                    <i className='uil uil-user nav__icon'></i>Community
                  </NavLink>
                </li>
                <li className='nav__item'>
                  <NavLink to='/contact' className='nav__link'>
                    <i className='uil uil-message nav__icon'></i>Contact
                  </NavLink>
                </li>
              </ul>

              <i className='uil uil-times nav__close' onClick={() => showMenu(!Toggle)}></i>
            </div>

            <div className='nav__toggle' onClick={() => showMenu(!Toggle)} >
              <i className='uil uil-apps'></i>
            </div>
          </nav>
        </header>
      </>
    )
}

export default Header