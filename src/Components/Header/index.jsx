import './Header.css'

function Header () {
  return (
    <header className="header">
      <div className="container">
        <nav>
          <a href='/'>
            <img src={`https://pulseapp.com/img/pulse-logo.svg`} />
          </a>
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
              <a>
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