import React from 'react'
import * as styles from "../components/styledComp/Navbar.module.scss"
import logo from "../images/logo.svg"
import live from "../images/live.svg"


const Navbar = () => {

 return (
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
 )
}

export default Navbar
