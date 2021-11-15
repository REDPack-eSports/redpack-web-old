import * as React from "react"
import * as styles from "../styles/Home.module.scss"
import bannerbig from "../images/banner_big.png"
import logo from "../images/logo.svg"
import live from "../images/live.svg"
import newsone from "../images/News1.png"
import newstwo from "../images/News2.png"
import newsthree from "../images/News3.png"
import upcone from "../images/Upcoming1.png"
import upctwo from "../images/Upcoming2.png"
import upcthree from "../images/Upcoming3.png"
import phone from "../images/ph1.jpg"
import playerph from "../images/player_ph.png"
import phwhite from "../images/player_ph_white.png"

const IndexPage = () => {
  return (
    <body>
		<div className={styles.maincontainer}>
			<div className={styles.bgcontainer}> 
				<img src={bannerbig} alt="banner"/>
			</div>

			<div className={styles.foreground}>
				<header>
          <div className={styles.left}>
            <nav>
              <a href="#">
                <svg width="16" height="16" fill="currentColor" className={styles.menu} viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
              </a>
              <ul> 
                <li><a href="#">Teams</a></li>
																<li><a href="#">Schedule</a></li>
                <li><a href="#">Media</a></li>
                <li><a href="#">Contact</a></li>
                {/* <li><a href="#">Shop</a></li> */}
              </ul>
            </nav>
          </div>
          <div className={styles.center}>
					  <a href="#"><img className={styles.logo} src={logo} alt="logo"/></a>
          </div>
          <div className={styles.right}>
					  <a href="#"><img className={styles.live} src={live} alt="live"/></a>
          </div>
				</header>

				<section className={styles.banner}>
					<h1>Redpack</h1>
					<h2>Joins the game</h2>
          <a href="#"><h3>Check us out!</h3></a>
				</section>

				<section className={styles.news}>
          <div className={styles.heading}>
					  <a href="#">
						  <h1 className={styles.sectionheader}>News</h1>
              <div className={styles.headingArrow}>
                <svg width="16" height="16" fill="currentColor" className={styles.headingArrow} viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/>
                </svg>
              </div>
					  </a>
          </div>
					<div className={styles.clearfix}></div>

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
					</div>
        </section>

				<section className={styles.upcoming}>
				  <div className={styles.heading}>
					  <a href="#">
						  <h1 className={styles.sectionheader}>Upcoming</h1>
              <svg width="16" height="16" fill="currentColor" className={styles.headingArrow} viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/>
              </svg>
					  </a>
          </div>
					<div className={styles.clearfix}></div>
          
          <div className={`${styles.content} ${styles.mobile}`}>
            <div className={`${styles.item} ${styles.one}`}>
              <img className={styles.image} src={upcone} alt="upcoming_1"/>
							<h2 className={styles.title}>Bi-weekly Youtube Shows</h2>
            </div>
						<div className={`${styles.item} ${styles.two}`}>
							<img className={styles.image} src={newsone} alt="upcoming_2"/>
							<h2 className={styles.title}>Tournament highlights</h2>
						</div>
						<div className={`${styles.item} ${styles.three}`}>
							<h2 className={styles.title}>CS:GO Team joins </h2>
							<img className={styles.image} src={upcthree} alt="upcoming_3"/>
						</div>
          </div>

					<div className={`${styles.content} ${styles.desktop}`}>
            <div className={`${styles.item} ${styles.one}`}>
              <img className={styles.image} src={phone} alt="upcoming_1"/>
							<h2 className={styles.title}>Bi-weekly Youtube Shows</h2>
            </div>
						<div className={styles.right}>
							<div className={`${styles.item} ${styles.two}`}>
								<img className={styles.image} src={newsone} alt="upcoming_2"/>
								<h2 className={styles.title}>Tournament highlights</h2>
							</div>
							<div className={`${styles.item} ${styles.three}`}>
								<h2 className={styles.title}>CS:GO Team joins </h2>
								<img className={styles.image} src={upcthree} alt="upcoming_3"/>
							</div>
						</div>
          </div>

				</section>
        
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
				
        <section className={styles.contact}>
          <div className={styles.heading}>
					  <a href="#">
						  {/* <h1 className={styles.sectionheader}>Contact</h1>
              <svg width="16" height="16" fill="currentColor" className={styles.headingArrow} viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/>
              </svg> */}
					  </a>
          </div>
					<div className={styles.clearfix}></div>
          
          <div className={styles.content}>
            <p>Join the pack!</p>
          </div>
        </section>

        <footer>
					<p className={styles.red}>redpackorg@gmail.com</p>
          <p>©RedPack 2021</p>
					<div>
						<a className={styles.cyan} href="https://www.facebook.com/redpackesports/">
							<svg width="16" height="16" fill="currentColor" className={styles.social} viewBox="0 0 16 16">
								<path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
							</svg>
						</a>
						<a className={styles.cyan} href="https://www.youtube.com/c/REDPackEsports">
							<svg width="16" height="16" fill="currentColor" className={styles.social} viewBox="0 0 16 16">
								<path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
							</svg>
						</a>
						<a className={styles.cyan} href="https://www.twitch.tv/redpackorg">
							<svg width="16" height="16" fill="currentColor" className={styles.social} viewBox="0 0 16 16">
								<path d="M3.857 0 1 2.857v10.286h3.429V16l2.857-2.857H9.57L14.714 8V0H3.857zm9.714 7.429-2.285 2.285H9l-2 2v-2H4.429V1.143h9.142v6.286z"/>
								<path d="M11.857 3.143h-1.143V6.57h1.143V3.143zm-3.143 0H7.571V6.57h1.143V3.143z"/>
							</svg>
						</a>
					</div>
        </footer>

      </div> 
  	</div> 

  
  </body>
  )
}

export default IndexPage
