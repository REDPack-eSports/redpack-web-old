import React from 'react'
import * as styles from "../components/styledComp/News.module.scss"
import newsone from "../images/News1.png"
import newstwo from "../images/News2.png"
import newsthree from "../images/News3.png"
import { Link } from 'gatsby'


const News = () => {
 return (
  <>
  <section className={styles.news}>
          <div className={styles.heading}>
					  <Link to="#" className={styles.linkHeader}>
						  <h1 className={styles.sectionheader}>News</h1>
              <div className={styles.headingArrow}>
                <svg width="16" height="16" fill="currentColor" className={styles.headingArrow} viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/>
                </svg>
              </div>
					  </Link>
          </div>
          <div className={styles.newsContent}>
           <div className={`${styles.newsItem}`}>
             <Link to="https://www.instagram.com/p/CWLk5dOKWT4/">
            <img src={newsone} alt="news1" className={styles.imgNews} />
            <h2 className={`${styles.newsTitle}`}>REDPack qualified for ROG Masters Romania 2021</h2></Link>
           </div>           
           <div className={`${styles.newsItem}`}>
            <img src={newstwo} alt="news2" className={styles.imgNews} />
            <h2 className={styles.newsTitle}>Initial lineups announcement</h2>
           </div>          
           
           <div className={`${styles.newsItem}`}>
             <Link to="https://www.facebook.com/redpackesports">
            <img src={newsthree} alt="news2" className={styles.imgNews} />
            <h2 className={styles.newsTitle}>The pack joins social media</h2></Link>
           </div> 
          </div>
        </section>
        <button className={styles.btnNews}>SEE MORE</button>
        </>
 )
}

export default News
