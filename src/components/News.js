import React from 'react'
import * as styles from "../styles/Home.module.scss"
import newsone from "../images/News1.png"
import newstwo from "../images/News2.png"
import newsthree from "../images/News3.png"


const News = () => {
 return (
  <>
  <section className={styles.news}>
          <div className={styles.heading}>
					  <a href="#" className={styles.linkHeader}>
						  <h1 className={styles.sectionheader}>News</h1>
              <div className={styles.headingArrow}>
                <svg width="16" height="16" fill="currentColor" className={styles.headingArrow} viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/>
                </svg>
              </div>
					  </a>
          </div>
          <div className={styles.newsContent}>
           <div className={`${styles.newsItem}`}>
            <img src={newsone} alt="news1" className={styles.imgNews} />
            <h2 className={`${styles.newsTitle}`}>Meet the content creators</h2>
           </div>           
           <div className={`${styles.newsItem}`}>
            <img src={newstwo} alt="news2" className={styles.imgNews} />
            <h2 className={styles.newsTitle}>Initial lineups announcement</h2>
           </div>          
           
           <div className={styles.newsItem}>
            <img src={newsthree} alt="news2" className={styles.imgNews} />
            <h2 className={styles.newsTitle}>The pack joins social media</h2>
           </div> 
          </div>
					{/* <div className={styles.clearfix}></div>

          <div className={styles.content}>
						<div className={styles.item}>
							<img className={styles.image} src={newsone} alt="news_1"/>
							<h2 className={styles.title}>Meet the content creators</h2>
						</div>
						<div className={styles.item}>
							<img className={styles.image} src={newstwo} alt="news_2"/>
							<h2 className={styles.title}>Initial lineups announcement</h2>
						</div>
            <div className={styles.last}>
            	<div className={styles.item}>
						  	<img className={styles.image} src={newsthree} alt="news_3"/>
							  <h2 className={styles.title}>The pack joins social media</h2>
						  </div>
              <a href="#">
                <div>
                  <svg width="16" height="16" fill="currentColor" className={styles.plus} viewBox="0 0 16 16">
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                  </svg>
                </div>
                <h2 className={styles.more}>More</h2>
              </a>
              <div className={styles.clearfix}></div>
            </div>
					</div> */}
        </section>
        <button className={styles.btnNews}>SEE MORE</button>
        </>
 )
}

export default News
