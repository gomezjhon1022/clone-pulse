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
                    <div className='extra-desktop'> You get Pulse Basics, plus: </div>
                  </div>
                </a>
              </div>
              <div className='pricing-books-features'>
                <a href='/'>
                  <div className='container-features'>
                    <div>Complex business with multiple financial accounts, currencies, or auditing needs?</div>
                    <div className='features-info'>
                      <div>Unlock Extra Features</div>
                      <div>$89 per month</div>
                      <div>Get it all, plus:</div>
                    </div>
                    <ul>
                      <li className='features-list'>
                        <span>Manage cash flow across unlimited financial accounts</span>
                      </li>
                      <li className='features-list'>
                        <span>Convert to any currency for localized cash flow reporting and projections</span>
                      </li>
                      <li className='features-list'>
                        <span>
                        Attach invoices or contracts to your cash flow entries for accountability and auditing
                        </span>
                      </li>
                    </ul>
                    <div>
                      <div className='button-premium'>Try Premium</div>
                    </div>
                    <div className='extra-desktop-features'>Get it all, plus:</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="final-phrase">
          <div>
            <img  src='https://pulseapp.com/img/subvert-avatar.png'/>
            <div>
            “Pulse is worth every penny because it empowers business owners with critical financial insight and knowledge.”
            </div>
            <div>
            Subvert Marketing, Inc.
            </div>
          </div>
        </div>
      </section>
      <section className='faq'>
        <h2 className='faq-title'>FAQ</h2>
        <div>
          <div className='faq-card'>
            <div>How does the 30-day free trial work?</div>
            <p>You can use Pulse absolutely free for 30 days. After 30 days, we will charge the credit card you used when you sign up. If you choose to cancel your account before your trial ends, your card will not be charged.</p>
          </div>
          <div className='faq-card'>
            <div>If I upgrade an existing account, do I get another free trial?</div>
            <p>Brand new accounts are the only ones eligible for a 30-day free trial. If you upgrade an existing account, your credit card will be billed the new amount on the date of your next billing cycle.</p>
          </div>
          <div className='faq-card'>
            <div>What is a “Financial Account”?</div>
            <p>Financial Accounts are a grouping of income and expense items that can be used for tracking or reporting purposes.<br/><br/>
            They’re designed to be flexible and can be used to differentiate between bank accounts, companies, individuals or between personal and business entries.
            </p>
          </div>
          <div className='faq-card'>
            <div>Do I have to commit to a long-term contract?</div>
            <p>No. There is no contract when you use Pulse, other than agreeing to our Terms of Service.</p>
          </div>
          <div className='faq-card'>
            <div>Will I be able to cancel my account if I don’t use Pulse?</div>
            <p>Yes – you can cancel your account at any time. To cancel your account, go to your billing page and click on “Please cancel my account” at the bottom of the page. The account owner is the only one who can cancel an account. An email request to delete an account is not considered cancellation.</p>
          </div>
          <div className='faq-card'>
            <div>What types of payments do you accept?</div>
            <p>We accept payments made online using Visa, Mastercard, Discover, and American Express.</p>
          </div>
        </div>
      </section>

    </main>
  )
}
