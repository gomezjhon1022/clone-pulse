import { useState } from 'react'
import './Header.css'


function Header () {
  const [isMenuMobileOpen, setIsMenuMobileOpen] = useState(false)
  
  function handleMenuMobile () {
    setIsMenuMobileOpen(!isMenuMobileOpen);
    console.log("cambio")
  }
  return (
    <header className="header">
      <div className="container">
        <nav>
          <a href='/'>
            <img src={`https://pulseapp.com/img/pulse-logo.svg`} />
          </a>
          <div className='header__menu__mobile'>
            <button onClick={handleMenuMobile}>
            <svg className="menu-image h-8 w-8" viewBox="0 0 35 22" xmlns="http://www.w3.org/2000/svg"><title>Menu - Open</title><path d="M0 0h35v2H0zM0 10h35v2H0zM0 20h35v2H0z"></path></svg>
            </button>
          </div>
          <ul className='header__right'>
            <li>
              <a>
                Features
              </a>
            </li>
            <li>
              <a>
                Customer Stories
              </a>
            </li>
            <li>
              <a>
                Pricing
              </a>
            </li>
            <li>
              <a>
                Blog
              </a>
            </li>
            <li className='header--sign_up'>
              <a className='sign-up sign-up-outline'>
                Sign Up
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export { Header }