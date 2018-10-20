import React from 'react'

import '../Components/layout.css'
import '../Components/medias.css'

import Layout from '../Components/Layout/layout'

const HowEvenMakesMoneyPage = () => (
  <Layout>
    <section className="start-section section how-even-makes-money-section">
      <h1 className="title"> How Even makes money </h1>
      <div className="columns how_even_makes_money_columns">
        <div className="column">
          <span className="hand-icon"> </span>
          <h3 className="title is-5">What we do:</h3>
          <p>
          We make money by charging a monthly subscription.
          <br />
          <br />
          If you don’t use your subscription for two consecutive months, we’ll automatically unsubscribe you—because we only want you 
          to pay for Even if you find it’s worth every penny
          </p>
        </div>
        <div className="column">
          <span className="hand-icon-inverted" ></span>
          <h3 className="title is-5"> What we don’t do:</h3>
          <p>
          We do not charge fees outside our monthly subscription. For anything. Ever.
          <br />        
          <br />
          We do not charge interest on money you owe us.
          <br />        
          <br />
          We do not sell your information. We will never, ever, sell your information. We may share some information with partners we’ve thoroughly vetted, but we only do this when we absolutely must, to provide the Even service. You can read more about this in our Privacy Policy.
          <br />        
          <br />
          We do not sell you credit cards or bank accounts you don’t need.
          <br />        
          <br />
          We do not earn interest on any money you’ve saved with Even.
          <br />        
          <br />
          Any questions? Please ask us! support@teameven.com
          </p>
        </div>
      </div>
    </section>
  </Layout>
)

export default HowEvenMakesMoneyPage
