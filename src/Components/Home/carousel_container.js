
import React from 'react'

import { Link } from 'gatsby'

import Carousel from './carousel_component'

const CarouselContainer = () => (
  <div className="container card-list-container">
    <div className="carousel-title">
      <h1 className="title">Join over 200,000 people who use Even</h1>
    </div>
    <Carousel />
    <div className="download-ratings">
      <p><strong className="big-strong">16k </strong>ratings</p>
      <p><strong className="big-strong">4.9 </strong> out of 5 stars</p>
    </div>
    <a href="/download"><button className="button is-rounded is-link is-medium">Download the app</button></a>
    <img src="https://d2pxm6w0ocgwp.cloudfront.net/d6efe14d1cbfc3b4196b3515731f4891/images/lock.svg" alt="Logo" width="15px" height="15px" />
    <p id="protection">Even keeps your information private and secure, 
      and never advertises to you. <Link to="/how-even-makes-money">Learn how Even makes money</Link>
    </p>
  </div>
)

export default CarouselContainer


