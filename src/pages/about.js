import React from 'react'

import '../Components/layout.css'
import '../Components/medias.css'

import Layout from '../Components/Layout/layout'
import ReferencesContainer from '../Components/About/references_container'
import ReferencesContainerSimple from '../Components/About/references_container_simple'
import Approaches from '../Components/About/approaches_container'
import Company from  '../Components/About/company'

const About = () => (
  <Layout>
    <section className="section start-section">
      <ReferencesContainerSimple 
                                title="Our mission is to end the paycheck-to-paycheck cycle"
                                description="70% of Americans live paycheck to paycheck. We’re trying to fix that,
                                by building new financial services that make it easier to make ends meet,
                                pay down debt, and save money. And we’re doing it as a transparent, 
                                straightforward business that only profits when our customers do, too."
                                source="Jon at Even"
                                articlePath="/"
                                articleTitle="The New Normal"
      />
    </section> 
    <section className="section">
      <Approaches />
    </section>
    <section className="section reference-container">
      <ReferencesContainer 
                          title="We partner with employers to offer Even as a benefit"
                          description="Employers subsidize the cost of Even for their people. In return, 
                          employers save money because Even improves employee retention."
                          subjectDesc="Offer Even as a benefit >"
                          subjectPath="/"
                          imagePath="https://d2pxm6w0ocgwp.cloudfront.net/7478dc6a6230ec1a6338da8e21ca0936/images/press-nyt.svg"
                          articlePath="/"
                          articleTitle="Walmmart Will Let Its 1.4 Million Workers Take Their Pay Before Payday"
      />
    </section>
    <div className="webelieve">
      <section className="section title-section">
        <h1 className="title">What we believe</h1>
      </section>
      <section className="section wwb">
        <ReferencesContainerSimple  
                                    title="Align incentives"
                                    description="In the long run, businesses that create value outperform 
                                    those that extract it. That’s why we make money from a
                                    subscription, not from interest or transaction fees."
                                    source="Quinten at Even"
                                    articlePath="/"
                                    articleTitle="How Even makes money"
        />
      </section>
      <section className="section wwb">
        <ReferencesContainerSimple  
                                    title="Make research-driven decisions"
                                    description="We invest in data science and qualitative research to understand the 
                                    truth of the problems we’re working on and ensure we’re actually solving them."
                                    source="FASTCOMPANY"
                                    articlePath="/"
                                    articleTitle="Why Even Decided to Make Its Product Development Experience Public"
        />
      </section>
      <section className="section wwb">
        <ReferencesContainerSimple  
                                    title="Put people first"
                                    description="We’re a company founded by designers and engineers. So we deliver results by
                                    focusing on what we do best: making products that fit into people’s lives."
                                    source="Jon at Even"
                                    articlePath="/"
                                    articleTitle="Why design doesn't deserve a seat at the table"
        />
      </section>
    </div>
    <section className="section">
      <Company />
    </section>
  </Layout>
)

export default About
