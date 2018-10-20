import React, { Component } from 'react'

import '../Components/layout.css'
import '../Components/medias.css'

import Layout from '../Components/Layout/layout'
import Carousel from '../Components/Home/carousel_component'

export default class EmployersPage extends Component {

  state = {
    currentVideoURL: "https://www.youtube.com/embed/XDOxZTWddcQ"
  }

  render() {
    return(
      <Layout>
    <section className="section start-section employers-info first-container">
      <div className="left-side">
        <h1 className="title">Get breakthrough engagement by offering more than a quick fix</h1>
        <p>Employees adopt Even for early access to pay—and stay engaged for its automatic budgeting and saving tools.</p>
        <a href="">Schedule a demo ></a>
      </div>
      <div className="right-side">
        <div className="right-column-top">
          <div className="number-left">
            <h1 className="title">15</h1>
          </div>
          <div className="info-right">
            <h2 className="title  is-medium">%</h2>
            <p> worforce adoption within 6 months</p>
          </div>
        </div>
        <div className="right-column-bottom">
          <div className="number-left">
            <h1 className="title">300</h1>
          </div>
          <div className="info-right">
            <h2 className="title  is-medium">K+</h2>
            <p>employees</p>
          </div>
        </div>
      </div>
    </section>
    <section class="section case-of-study">
      <div className="case-of-study-header">
        <div className="subtitle-top"><p>Case Study:</p><img src="https://d2pxm6w0ocgwp.cloudfront.net/7478dc6a6230ec1a6338da8e21ca0936/images/walmart-logo.svg" alt="walmart" /></div>
        <h2 className="title">See why Walmart chose to offer more than earned wage access</h2>
      </div>
      <div className="videos">
        <div className="current-video">
          <iframe src={this.state.currentVideoURL} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
        </div>
        <div className="video-list">
          <div onClick={ () => this.setState({ currentVideoUrl: "https://www.youtube.com/embed/XDOxZTWddcQ"})} className="video">
            <h3>1. The Problem</h3>
            <img src="https://d2pxm6w0ocgwp.cloudfront.net/7478dc6a6230ec1a6338da8e21ca0936/images/walmart-video-problem.jpg" />
          </div>

          <div onClick={ () => this.setState({ currentVideoUrl: "https://www.youtube.com/embed/XDOxZTWddcQ"})} className="video">
            <h3>2. Results</h3>
            <img src="https://d2pxm6w0ocgwp.cloudfront.net/7478dc6a6230ec1a6338da8e21ca0936/images/walmart-video-results.jpg" />
          </div>

          <div onClick={ () => this.setState({ currentVideoUrl: "https://www.youtube.com/embed/XDOxZTWddcQ"})} className="video">
            <h3>3. The Partnership</h3>
            <img src="https://d2pxm6w0ocgwp.cloudfront.net/7478dc6a6230ec1a6338da8e21ca0936/images/walmart-video-partnership.jpg" />
          </div>

          <div onClick={ () => this.setState({ currentVideoUrl: "https://www.youtube.com/embed/XDOxZTWddcQ"})} className="video">
            <h3>4. Implementation</h3>
            <img src="https://d2pxm6w0ocgwp.cloudfront.net/7478dc6a6230ec1a6338da8e21ca0936/images/walmart-video-implementation.jpg" />
          </div>
        </div>
      </div>
    </section>
    <section className="section carousel-section employers-carousel">
      <div className="container card-list-container">
      <div className="carousel-title">
        <h1 className="title">Join over 200,000 people who use Even</h1>
      </div>
      <Carousel />
      <div className="download-ratings">
        <p><strong className="big-strong">16k </strong>ratings</p>
        <p><strong className="big-strong">4.9 </strong> out of 5 stars</p>
      </div>
      <div className="download-buttons">
        <span className="appStore-button"></span>
        <span className="googlePlay-button"></span>
      </div>
    </div>
    </section>
    <section className="section employers-info-title">
      <h1 className="title">Here are the three pillars of Even’s holistic approach</h1>
    </section>
    <section className="section section-phone-employers">
      <div className="container custom-container left-phone">
        <div className="phone-container">
          <div className="phone-device">
            <span className="phone-image phone-image3"></span>
          </div>
        </div>
        <div className="text-container employers-phone phone-one">
          <img src="https://d2pxm6w0ocgwp.cloudfront.net/7478dc6a6230ec1a6338da8e21ca0936/images/icon-spend.svg" alt="credit-card" />
          <h1 className="title is-4">Instant budgeting<br />ensures bills are covered</h1>
          <h2 className="subtitle">
          Without a clear budget, it’s easy to overspend. Each pay period, Even shows employees how much 
          they need for bills and how much is left for spending. One glance at the app lets them know if they’re
          on track.
          </h2>
          <p className="subtitle is-6"><img src="https://d2pxm6w0ocgwp.cloudfront.net/7478dc6a6230ec1a6338da8e21ca0936/images/check-blue.svg" alt="check"/> Reduced overspending</p>
        </div>
      </div>
    </section>
    <section className="section section-phone-employers">
      <div className="container custom-container left-phone">
        <div className="phone-container">
          <div className="phone-device">
            <span className="phone-image phone-image3"></span>
          </div>
        </div>
        <div className="text-container employers-phone phone-two">
          <img src="https://d2pxm6w0ocgwp.cloudfront.net/7478dc6a6230ec1a6338da8e21ca0936/images/icon-instapay.svg" alt="credit-card" />
          <h1 className="title is-4">On-demand pay<br />solves cash flow problems</h1>
          <h2 className="subtitle">
          Emergencies and mistakes happen. Instead of entering a payday loan cycle, employees use Instapay to get
          some of their earned wages early, with no interest or hidden fees. Frequency and quantity limits make Instapay easy to use responsibly.
          </h2>
          <p className="subtitle is-6"><img src="https://d2pxm6w0ocgwp.cloudfront.net/7478dc6a6230ec1a6338da8e21ca0936/images/check-green.svg" alt="check"/> Fewer payday loans</p>
        </div>
      </div>
    </section>
    <section className="section section-phone-employers">
      <div className="container custom-container left-phone">
        <div className="phone-container">
          <div className="phone-device">
            <span className="phone-image phone-image3"></span>
          </div>
        </div>
        <div className="text-container employers-phone phone-three">
          <img src="https://d2pxm6w0ocgwp.cloudfront.net/7478dc6a6230ec1a6338da8e21ca0936/images/icon-save.svg" alt="credit-card" />
          <h1 className="title is-4">Automatic saving<br />makes progress easy</h1>
          <h2 className="subtitle">
          Without a plan and a place for saving, it’s hard to make progress. Employees choose a goal and Even automatically saves small
          amounts toward it in a separate account. Employees get the satisfaction of saving, without the temptation to spend.
          </h2>
          <p className="subtitle is-6"><img src="https://d2pxm6w0ocgwp.cloudfront.net/7478dc6a6230ec1a6338da8e21ca0936/images/check-purple.svg" alt="check"/> Increased savings</p>
        </div>
      </div>
    </section>
    <div className="blue-section">
      <section className="section employers-info">
        <h1 className="title is-2 is-white">Ensure your people and your business grow together</h1>
      </section>
      <section className="section bottom-section">
        <div className="press-header employers-info card-boxes">
          <div className="top-box">
            <h3 className="title is-4">Give financial health to your employees</h3>
            <p>Even helps employees avoid debt, build savings, and feel more certain about the future.</p>
            <div className="columns">
              <div className="column">
                <img src="https://d2pxm6w0ocgwp.cloudfront.net/7478dc6a6230ec1a6338da8e21ca0936/images/metrics-up.svg" />
                <ul>
                  <li>Bills paid on time</li>
                  <li>Savings</li> 
                </ul>
              </div>  
              <div className="column">
              <img src="https://d2pxm6w0ocgwp.cloudfront.net/7478dc6a6230ec1a6338da8e21ca0936/images/metrics-down.svg" />
                <ul>
                  <li>Payday loans</li>
                  <li>Overdraft fees</li>
                  <li>Overspending</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="top-box">
            <h3 className="title is-4">Improve the bottom line of your business</h3>
            <p>When employees thrive, they’re happier at work and perform better. Learn more about efficacy: Schedule a demo.</p>
            <div className="columns">
              <div className="column">
                <img src="https://d2pxm6w0ocgwp.cloudfront.net/7478dc6a6230ec1a6338da8e21ca0936/images/metrics-up.svg" />
                <ul>
                  <li>Retention</li>
                  <li>Benefit adoption </li>
                  <li>Benefit engagement</li>
                </ul>
              </div>  
              <div className="column">
              <img src="https://d2pxm6w0ocgwp.cloudfront.net/7478dc6a6230ec1a6338da8e21ca0936/images/metrics-down.svg" />
                <ul>
                  <li>Absenteeism </li>
                  <li>Recruiting costs</li>
                </ul>
              </div>
            </div>
            </div>
          </div>
          <div className="press-header employers-info card-boxes">
            <div className="bottom-box">
              <div className="bottom-box-title">
                <h3 className="title is-5"><img src="https://d2pxm6w0ocgwp.cloudfront.net/7478dc6a6230ec1a6338da8e21ca0936/images/security.svg" />   Serious Security</h3>
              </div>
              <p>Our ISO 27001 controls include network segmentation, end-to-end encryption, and role-based access. Even will never sell your data or advertise to your employees.</p>
            </div>
            <div className="bottom-box">
              <div className="bottom-box-title">
                <h3 className="title is-5"><img src="https://d2pxm6w0ocgwp.cloudfront.net/7478dc6a6230ec1a6338da8e21ca0936/images/rollout.svg" /> Easy rollout</h3>
              </div>
              <p>Our world-class, in-house engineers are dedicated to ensuring a smooth integration with your systems within a few weeks.</p>
            </div>
          </div>
      </section>
    </div>
    <section className="section employers-info employers-last-section">
      <h1 className="title is-3">See how much your business can save by offering Even as a benefit Schedule a demo</h1>
      <a href="#press-kit-section"><button className="button is-rounded is-link">Schedule a demo</button></a>
    </section>
  </Layout>
    )
    ;
  }
}