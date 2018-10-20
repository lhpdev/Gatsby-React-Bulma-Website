import React from 'react'
import { Link } from 'gatsby'

import './footer.css'

const Footer = () => (
  <footer className="footer">
    <div className="columns">
      <div className="column">
      <p>COMPANY</p>
        <Link to="/"><p>The Even app</p></Link>
        <Link to="/about"><p>About us</p></Link>
        <Link to="/careers"><p>Careers</p></Link>
        <Link to="/press"><p>Press</p></Link>
        <a href="https://blog.even.com/"><p>Blog</p></a>
      </div>
      <div className="column">
      <p>BUSINESS</p>
        <Link to="/employers"><p>Offer Even as a benefit</p></Link>
        <Link to="/how-even-makes-money"><p>How we makes money</p></Link>
      </div>
      <div className="column">
      <p>SUPPORT</p>
        <Link to="/"><p>hello@teameve.com</p></Link>
        <Link to="/faq"><p>FAQ</p></Link>
        <Link to="/legal/basic"><p>Terms of Service</p></Link>
        <Link to="/legal/privacy"><p>Privacy Policy</p></Link>
      </div>
      <div className="column">
        <p>DOWNLOAD</p>
        <span className="appStore-button"></span>
        <span className="googlePlay-button"></span>
      </div>
    </div>
  </footer>
)

export default Footer