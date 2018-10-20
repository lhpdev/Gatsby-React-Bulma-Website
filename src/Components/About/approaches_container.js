import React from 'react'

import CardItem from './card_item'

const Approaches = () => (
  <div className="icons-container">
    <h1 className="title">We think there are no silver bullets, so we take a holistic approach</h1>
    <p>
    We integrate with attendance, payroll, and banking systems so 
    we can understand and impact the complete picture of financial health.
    </p>
    <div className="columns">
      <CardItem iconColor="icon has-text-primary"
                iconType="fas fa-credit-card"
                title="Instant budgeting"
                description="Budgeting shouldn’t be a burden, so we’ve
                built technology to do the math automatically."
      />
      <CardItem iconColor="icon has-text-info"
                iconType="fas fa-bolt"
                title="On-demand pay"
                description="Fixing cashflow problems shouldn’t 
                be expensive, so we enable instant access to earned wages."
      />
      <CardItem iconColor="icon has-text-danger"
                iconType="fas fa-heart"
                title="On-demand pay"
                description="Saving should be easy, so we automatically
                save money when people earn it."
      />
    </div>
  </div>
)

export default Approaches
