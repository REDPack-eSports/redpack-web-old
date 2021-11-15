import React from 'react'
import * as styles from "../styles/Home.module.scss"
import bannerbig from "../images/banner_big.png"

const Banner = () => {
 return (
  <div className={styles.bgcontainer}> 
				<img src={bannerbig} alt="banner"/>
		</div>
 )
}

export default Banner
