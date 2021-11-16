import React from 'react'
import * as styles from "../components/styledComp/BannerText.module.scss"

const BannerText = () => {
 return (
  <div>
   <section className={styles.banner}>
												<h1>Redpack</h1>
												<h2>Joins the game</h2>
          		<a href="#"><h3>Check us out!</h3></a>
										</section>
  </div>
 )
}

export default BannerText
