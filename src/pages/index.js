import * as React from "react"
import * as styles from "../components/styledComp/Home.module.scss"

import News from "../components/News"
import Banner from "../components/Banner"
import Upcoming from "../components/Upcoming"
import Teams from "../components/Teams"
import Layout from "../components/Layout"
import BannerText from "../components/BannerText"

const IndexPage = () => {
  return (
    <body>
      <div className={styles.maincontainer}>
        <Banner />
        <div className={styles.foreground}>
          <Layout>
            <BannerText />
            <News />
            <Upcoming />
            <Teams />
          </Layout>
        </div>
      </div>
    </body>
  )
}

export default IndexPage
