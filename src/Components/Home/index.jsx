import './Home.css'

export function Home () {
  return (
    <main>
      <section className="content">
        <div className="container container-try">
          <div className='content-try'>
            <h1>Try Pulse free for <br/>30 days</h1>
            <p>See why Pulse is the best way to monitor your cash flow. Sign up for any plan and try Pulse absolutely free for 30 days.</p>
          </div>
        </div>
        <div className="container">
          <div className='pricing-books'>
            <div className='pricing-books-list'>
              <div className='container'>
                <h2>These are what we call the Pulse Basics. They’re what every customer gets.</h2>
                <ul className='benefits'>
                  <li>Manage cash flow on a daily, weekly, monthly, or yearly basis</li>
                  <li>Forecast growth with recurring income or expenses that scale automatically</li>
                  <li>Works with any currency</li>
                  <li>See Money In and Money Out, categorize transactions, and run helpful reports</li>
                  <li>Toggle entries and accounts on and off to game out different scenarios</li>
                </ul>
                <p>Just need the Pulse Basics? <br/>
                  <a>Get them now</a> for $29 per month.
                </p>
              </div>
              <div className='recommended'>
                <a href='/'>
                  <div>
                    <div className='block-banner'>
                      RECOMMENDED
                    </div>
                    <div className='recommended-main'>
                      <div>
                        <div className='title'>Small Business Plan</div>
                        <div className='price'> $59 per month </div>
                        <div style={{display:'none'}}>
                          <div >
                            Sign Up Now
                          </div>
                        </div>
                        <div className='extra'> You get Pulse Basics, plus: </div>
                      </div>
                    </div>
                    <ul className='recommended-list'>
                      <li>
                        <span>Manage cash flow across multiple financial accounts</span>
                      </li>
                      <li>
                        <span>Invite your investors, book keeper, or management team to see reports or manage cash flow</span>
                      </li>
                      <li>
                        <span>Integrate with QuickBooks Online for more accurate cash flow</span>
                      </li>
                      <li>
                        <span>Track your actual cash flow alongside your projected cash flow</span>
                      </li>
                    </ul>
                    <div className='recommended-sign-up'>
                      <div>
                      Sign Up Now
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <divp className='pricing-books-plan'></divp>
            <divp className='pricing-books-features'></divp>
          </div>
        </div>
        <div className="container">
          try pulse3
        </div>
      </section>

    </main>
  )
}
