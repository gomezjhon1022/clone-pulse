import './Footer.css'

export function Footer() {
  return (
    <div className='footer'>
      <div>
        <div className='footer-container-info'>
          <div>
            <div className='footer-info-sign-in'>
              <p>
                <a className='footer-image'>
                  <img  src='https://pulseapp.com/img/pulse-logo.svg'/>
                </a>
              </p>
              <p>
                <a className='button-footer'>
                Sign Up for a Free 30-Day Trial
                </a>
              </p>
            </div>
            <div className='footer-info-links'>
              <ul>
                <li>Product</li>
                <li>
                  <a href='/'>
                  Feature
                  </a>
                </li>
                <li>
                  <a href='/'>
                    Pricing
                  </a>
                </li>
                <li>
                  <a href='/'>
                    Sign Up
                  </a>
                </li>
              </ul>
              <ul>
                <li>Company</li>
                <li>
                  <a href='/'>
                    Customer Stories
                  </a>
                </li>
                <li>
                  <a href='/'>
                    About
                  </a>
                </li>
                <li>
                  <a href='/'>
                    Contact
                  </a>
                </li>
              </ul>
              <ul>
                <li>Resources</li>
                <li>
                  <a href='/'>
                    Support
                  </a>
                </li>
                <li>
                  <a href='/'>
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='footer-container-links'>
        ©2019 Pulseapp.com, Inc. All Rights Reserved |
        <a href='/'> Terms of use </a> | <a href='/'> Privacy Policy </a> | <a href='/'> EU Privacy </a><br/>Pulse is made by <a href='/'>Simple Focus</a>. We also make <a href='/'>Ballpark</a>, <a href='/'>Sifter</a>, and <a href='/'>Curated</a>.
        </div>

      </div>
    </div>
  )
}
