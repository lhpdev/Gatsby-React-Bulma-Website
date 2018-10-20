import React from 'react'
import { Link } from 'gatsby'

import '../Components/layout.css'
import '../Components/medias.css'

import Layout from '../Components/Layout/layout'
import MainPhoneContainer from '../Components/Home/phone_containers/main_phone_container'
import RightPhoneContainer from '../Components/Home/phone_containers/right_phone_container'
import LeftPhoneContainer from '../Components/Home/phone_containers/left_phone_container'
import RightPhoneContainerLast from '../Components/Home/phone_containers/right_phone_container_last';
import CarouselContainer from '../Components/Home/carousel_container';
import RefencesContainer from '../Components/Home/references_container'

const IndexPage = () => (
  <Layout>
    <section className="section start-section">
      <MainPhoneContainer />
    </section>
    <section className="section">
      <RightPhoneContainer />
    </section>
    <section className="section">
      <LeftPhoneContainer />
    </section>
    <section className="section">
      <RightPhoneContainerLast />
    </section>
    <section className="section carousel-section">
      <CarouselContainer />
    </section>
    <section className="press-video-section video-on-home">
      <div className="press-video">
        <iframe src="https://www.youtube.com/embed/90--YL0mLJY" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      </div>
    </section>
    <div className="webelieve webelieve-on-home">
      <section className="section">
        <div className="container references-container">
          <h1 className="title">Our mission is to end the paycheck-to-paycheck cycle</h1>
          <div className="text-section-content">
            <div className="description">
              <p>70% of Americans live paycheck to paycheck. We’re trying to fix that,
                          by building new financial services that make it easier to make ends meet,
                          pay down debt, and save money. And we’re doing it as a transparent, 
                          straightforward business that only profits when our customers do, too.</p>
              <Link to="/about">About ></Link>
              <Link to="/careers">Careers ></Link>
            </div>
            <div className="article-section">
              <h2> <img style={{ width: '1.5rem', height: '1.5rem', borderRadius: '15px' }} src="https://d2pxm6w0ocgwp.cloudfront.net/7478dc6a6230ec1a6338da8e21ca0936/images/portrait-jon.jpg" />John at Even</h2>
              <Link to="https://blog.even.com/the-new-normal-b741608f929b">The New Normal</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
    <section className="section">
      <RefencesContainer title="We partner with employers to offer Even as a benefit"
                         description="Employers subsidize the cost of Even for their people.
                         In return, employers save money because Even improves employee retention."
                         subjectDesc="Offer Even as a benefit >"
                         subjectPath="/employers  "
                         imagePath="https://d2pxm6w0ocgwp.cloudfront.net/7478dc6a6230ec1a6338da8e21ca0936/images/press-nyt.svg"
                         articlePath="/"
                         articleTitle="Walmmart Will Let Its 1.4 Million Workers Take Their Pay Before Payday"
      />
    </section>
  </Layout>
)

export default IndexPage
