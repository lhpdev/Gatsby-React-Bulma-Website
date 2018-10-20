import React from 'react'
import { Link } from 'gatsby'

import Pictures from './pictures';

const Company = () => (
  <div className="final-container-about-us">
  <h1 className="title">Even is based in Oakland, California and Raleigh, North Carolina</h1>
  <Pictures />
  <div className="columns columns-company">
    <div className="column">
      <h2>Our history</h2>
      <p>Even was founded in 2014 by a few people passionate about this problem. </p>
      <a href ="https://blog.even.com/why-69a9d8193075">Why we started Even ></a>
    </div>
    <div className="column">
      <h2>We’re hiring</h2>
      <p>Help us build a financial institution that creates economic opportunity. </p>
      <Link to="/careers">See open roles ></Link>
    </div>
  </div>
</div>
)

export default Company