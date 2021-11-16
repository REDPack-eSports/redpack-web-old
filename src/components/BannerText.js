import React from 'react'
import { Link } from 'gatsby'
import * as styles from "../components/styledComp/BannerText.module.scss"

const BannerText = () => {
 return (
  <div>
   <section className={styles.banner}>
												<h1>Redpack</h1>
												<h2>Joins the game</h2>
          		<Link to="#"><h3>Check us out!</h3></Link>
										</section>
  </div>
 )
}

export default BannerText
