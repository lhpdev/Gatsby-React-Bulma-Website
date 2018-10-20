import React from 'react'

import '../Components/layout.css'
import '../Components/medias.css'

import Layout from '../Components/Layout/layout'

const CareerPage = () => (
  <Layout>
    <section className="section start-section career-section">
        <h1 className="title">Help us end the paycheck-to-paycheck cycle.</h1>
        <a href="/"><button style={{ color: 'grey' }} className="button is-rounded">Jump to open roles</button></a>
    </section>
    <section className="section career-boards-section section-careers">
      <div className="columns">
        <a href="https://medium.com/@jschloss/why-69a9d8193075">
          <div className="column">
            <div className="career-board">
              <h2 className="title is-4">Work on an important problem</h2>
              <p>More than 50% of Americans live paycheck to paycheck. We’re trying to fix 
                that, by building new financial services that make it easier to make ends 
                meet, pay down debt, and save.
              </p>
              <div><a href="https://blog.even.com/why-69a9d8193075">Learn more about our mission ›</a></div>
              <img src="https://d2pxm6w0ocgwp.cloudfront.net/7478dc6a6230ec1a6338da8e21ca0936/images/jobs-mural.png" />
            </div>
          </div>
        </a>
        <a href="https://blog.even.com/what-we-value-f99852f6199a">
          <div className="column">
            <div className="career-board">
              <h2 className="title is-4">Think for yourself</h2>
              <p>We trust everyone we hire. That’s why we’ve built our company around 
              giving Eveners as much information, autonomy, and responsibility as possible.
              </p>
              <div><a href="https://blog.even.com/what-we-value-f99852f6199a">Read more about our values ›</a></div>
              <img src="https://d2pxm6w0ocgwp.cloudfront.net/7478dc6a6230ec1a6338da8e21ca0936/images/jobs-autonomy.jpg" />
            </div>
          </div>
        </a>
      </div>
      <div className="columns">
        <a href="https://blog.even.com/make-the-truth-unavoidable-62476c78257e">
          <div className="column">
            <div className="career-board">
              <h2 className="title is-4">Make research-driven decisions</h2>
              <p>We invest in data science and qualitative research to understand the truth of the
              problems we’re working on and ensure we’re actually solving them.
              </p>
              <div><a href="/">Read more on the Even blog ›</a></div>
              <img src="https://d2pxm6w0ocgwp.cloudfront.net/7478dc6a6230ec1a6338da8e21ca0936/images/jobs-data.jpg" />
            </div>
          </div>
        </a>
        <a href="https://schloss.quora.com/Design-doesnt-deserve-a-seat-at-the-table">
          <div className="column">
            <div className="career-board">
              <h2 className="title is-4">Put people first</h2>
              <p>We’re a company founded by designers and engineers. So we deliver results
              by focusing on what we do best: making products that fit into people’s lives.
              </p>
              <div><a href="/">Read about our design philosophy ›</a></div>
              <img src="https://d2pxm6w0ocgwp.cloudfront.net/7478dc6a6230ec1a6338da8e21ca0936/images/jobs-podcast.jpg" />
            </div>
          </div>
        </a>
      </div>
    </section>
    <section className="section open-roles">
      <h1 className="title">Open roles at Even</h1>
      <div className="columns">
        <div className="column">
          <div className="roles-left">
            <h2 className="title is-4">Finance</h2>
            <div className="role">
              <a href="">Accounting Managert</a>
              <p>RALEIIGH , NC</p>
            </div>
          </div>
          <div className="roles-left">
            <h2 className="title is-4">Marketing</h2>
            <div className="role">
              <a href="">Content Strategist</a>
              <p>OAKLAND , CA</p>
            </div>
          </div>
          <div className="roles-left">
            <h2 className="title is-4">Product</h2>
            <div className="role">
              <a href="">Product Designer</a>
              <p>OAKLAND , CA</p>
            </div>
          </div>
          <div className="roles-left">
            <h2 className="title is-4">People</h2>
            <div className="role">
              <a href="">Senior Recruiter</a>
              <p>OAKLAND , CA</p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="roles-right">
            <h2 className="title is-4">Engeneering</h2>
            <div className="role">
              <a href="">Director, Product Engineering</a>
              <p>OAKLAND , CA</p>
            </div>
            <div className="role">
              <a href="">Head of Infrasctructure</a>
              <p>OAKLAND , CA</p>
            </div>
            <div className="role">
              <a href="">Security Operations Engineer</a>
              <p>OAKLAND , CA</p>
            </div>
            <div className="role">
              <a href="">Senior Data Engineer</a>
              <p>OAKLAND , CA</p>
            </div>
            <div className="role">
              <a href="">Software Engineer, Integrations</a>
              <p>OAKLAND , CA</p>
            </div>
            <div className="role">
              <a href="">Software Engineer, Platform</a>
              <p>OAKLAND , CA</p>
            </div>
            <div className="role">
              <a href="">Software Engineer, Product</a>
              <p>OAKLAND , CA</p>
            </div>
            <div className="role">
              <a href="">Tech Lead, Core Banking</a>
              <p>OAKLAND , CA</p>
            </div>
            <div className="role">
              <a href="">Tech Lead, Financial Planning</a>
              <p>OAKLAND , CA</p>
            </div>
            <div className="role">
              <a href="">Tech Lead, Integrations</a>
              <p>OAKLAND , CA</p>
            </div>
            <div className="role">
              <a href="">Tech Lead, Internal Tools</a>
              <p>OAKLAND , CA</p>
            </div>
            <div className="role">
              <a href="">Tech Lead, Savings</a>
              <p>OAKLAND , CA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default CareerPage
