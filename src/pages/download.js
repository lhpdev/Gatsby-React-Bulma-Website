import React from 'react'

import '../Components/layout.css'
import '../Components/medias.css'

import Layout from '../Components/Layout/layout'
import MainPhoneContainer from '../Components/Home/phone_containers/main_phone_container'

const DownloadPage = () => (
  <Layout>
    <section className="section start-section">
      <MainPhoneContainer />
    </section>
  </Layout>
)

export default DownloadPage
