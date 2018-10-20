import React from 'react'

import '../Components/layout.css'
import '../Components/medias.css'

import Layout from '../Components/Layout/layout'
import PressCard from '../Components/Press/press_card'

const PressPage = () => (
  <Layout>
    <section className="section start-section press-section">
      <div className="press-header">
        <h1 className="title">Read about Eve</h1>
        <a href="#press-kit-section"><button className="button is-rounded">Jump to press kit</button></a>
      </div>
      <div className="card-press_first">
        <PressCard  image_src="https://d2pxm6w0ocgwp.cloudfront.net/7478dc6a6230ec1a6338da8e21ca0936/images/press-bloomberg@1x.svg" 
                    title="Walmart’s Fintech Partner Helps Break Paycheck-to-Paycheck Cycle" 
                    description="More than 300,000 Walmart employees in the U.S. use Even’s app 
                    to manage their finances or access their wages early, the Oakland-based
                    startup said in a statement Thursday, and almost half of that group 
                    employs it every day..." 
                    link="https://www.bloomberg.com/news/articles/2018-07-19/walmart-s-fintech-partner-helps-break-paycheck-to-paycheck-cycle" 
                    date="July 19, 2018"
        />
      </div>
      <PressCard  image_src="https://d2pxm6w0ocgwp.cloudfront.net/7478dc6a6230ec1a6338da8e21ca0936/images/press-forbes@1x.svg" 
                  title="VCs Bet $40 Million On Money App For Those Living Paycheck To Paycheck" 
                  description="" 
                  link="https://www.forbes.com/sites/jeffkauflin/2018/07/19/payday-loans-be-gone-a-growing-set-of-startups-are-gunning-to-unseat-them" 
                  date="July 19, 2018"
      /> 
      <PressCard  image_src="https://d2pxm6w0ocgwp.cloudfront.net/7478dc6a6230ec1a6338da8e21ca0936/images/press-fastco@1x.svg" 
                  title="Why [Even] Decided To Make Its Product Development Experience Public" 
                  description="" 
                  link="https://www.fastcompany.com/40536995/40536995" 
                  date="February 28, 2018"
      /> 
      <PressCard  image_src="https://d2pxm6w0ocgwp.cloudfront.net/7478dc6a6230ec1a6338da8e21ca0936/images/press-hbr@1x.svg" 
                  title="Too Many Americans Suffer from Financial Instability. Their Employers Can Help Fix It" 
                  description="" 
                  link="https://hbr.org/2017/12/too-many-americans-suffer-from-financial-instability-their-employers-can-help-fix-it" 
                  date="December 14, 2017"
      /> 
      <PressCard  image_src="https://d2pxm6w0ocgwp.cloudfront.net/7478dc6a6230ec1a6338da8e21ca0936/images/press-nyt@1x.svg" 
                  title="Walmart Will Let Its 1.4 Million Workers Take Their Pay Before Payday" 
                  description="" 
                  link="https://www.nytimes.com/2017/12/13/business/walmart-workers-pay-advances.html?rref=collection%2Fsectioncollection%2Fbusiness&action=click&contentCollection=business&region=rank&module=package&version=highlights&contentPlacement=11&pgtype=sectionfront&mtrref=www.nytimes.com&gwh=0731A113257B120644E66C4199284246&gwt=pay" 
                  date="December 17, 2017"
      /> 
      <section id="press-kit-section" className="about-even">
        <div className="press-download">
          <h1 className="title">Write about Even</h1>
          <div className="press-buttons">
            <a href="https://www.dropbox.com/sh/vby9vmsnu5dgeug/AAAZZ49l1pcLh0OUhfXH_xd5a?dl=0"><button className="button is-rounded">Download press kit</button></a>
            <button className="button is-rounded is-link">Contact us</button>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <h2 className="title is-4">What's Even?</h2>
            <p>
            Even is a holistic financial health platform that brings powerful financial tools together into one seamless, 
            intuitive user experience. Some tools Even makes itself, like its automatic financial manager. Others are the result of 
            behind-the-scenes partnerships with industry-leading companies.
            </p>
          </div>
          <div className="column">
          <h2 className="title is-4">What's Even?</h2>
            <p>
            Even is a holistic financial health platform that brings powerful financial tools together into one seamless, 
            intuitive user experience. Some tools Even makes itself, like its automatic financial manager. Others are the result of 
            behind-the-scenes partnerships with industry-leading companies.
            </p>
          </div>
        </div>
      </section>
      <section className="press-images-section">
        <h2 className="title is-4">Product Images</h2>
        <div className="columns">
          <div className="column image-left">
            <div className="phone-device">
              <span className="phone-image phone-image3"></span>
            </div>
          </div>
          <div className="column image-center">
            <div className="phone-device">
              <span className="phone-image phone-image2"></span>
            </div>
          </div>
          <div className="column image-right">
            <div className="phone-device">
              <span className="phone-image phone-image4"></span>
            </div>
          </div>
        </div>
      </section>
      <section className="press-video-section">
        <h2 className="title is-4">Product video</h2>
        <div className="press-video">
          <iframe src="https://www.youtube.com/embed/90--YL0mLJY" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
        </div>
      </section>
    </section>
  </Layout>
)

export default PressPage
