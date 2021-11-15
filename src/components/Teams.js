import React from 'react'
import * as styles from "../styles/Home.module.scss"

import playerph from "../images/player_ph.png"
import phwhite from "../images/player_ph_white.png"

const Teams = () => {
 return (
  <div>
   <section className={styles.teams}>
          <div className={styles.heading}>
					  <a href="#">
						  <h1 className={styles.sectionheader}>Teams</h1>
              <svg width="16" height="16" fill="currentColor" className={styles.headingArrow} viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/>
              </svg>
					  </a>
          </div>
					<div className={styles.clearfix}></div>
         	
          <div className={styles.content}>
            <div className={`${styles.item} ${styles.cs}`}>
              <div className={styles.inner}>
								<h2>CS:GO</h2>
								<div className={styles.team}>
									<div className={styles.top}>
										<div className={styles.player}>
											<img src={playerph}/>
											<p>FREELOOK-</p>
										</div>
										<div className={styles.player}>
											<img src={playerph}/>
											<p>Marsal</p>
										</div>
										<div className={styles.player}>
											<img src={playerph}/>
											<p>RoberttMP</p>
										</div>
									</div>
									<div className={styles.bottom}>
										<div className={styles.player}>
											<img src={playerph}/>
											<p>never-sleep</p>
										</div>
										<div className={styles.player}>
											<img src={playerph}/>
											<p>TBA</p>
										</div>
									</div>
								</div>
              </div>
            </div>
            <div className={`${styles.item} ${styles.valorant}`}>
              <div className={styles.inner}>
								<h2>Valorant</h2>
								<div className={styles.team}>
									<div className={styles.top}>
										<div className={styles.player}>
											<img src={phwhite}/>
											<p>TBA</p>
										</div>
										<div className={styles.player}>
											<img src={phwhite}/>
											<p>TBA</p>
										</div>
										<div className={styles.player}>
											<img src={phwhite}/>
											<p>TBA</p>
										</div>
									</div>
									<div className={styles.bottom}>
										<div className={styles.player}>
											<img src={phwhite}/>
											<p>TBA</p>
										</div>
										<div className={styles.player}>
											<img src={phwhite}/>
											<p>TBA</p>
										</div>
									</div>
								</div>
              </div>
            </div>
          </div>
        </section>
  </div>
 )
}

export default Teams
