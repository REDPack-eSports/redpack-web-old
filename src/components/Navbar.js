import React from 'react'
import * as styles from "../components/styledComp/Navbar.module.scss"
import logo from "../images/logo.svg"
import live from "../images/live.svg"
import { Link } from 'gatsby'


const Navbar = () => {

 return (
  <header>
          <div className={styles.left}>
            <nav>
              <Link to="/">
                <svg width="16" height="16" fill="currentColor" className={styles.menu} viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
              </Link>
              <ul> 
                <li><Link to="#" activeClassName="teams">Teams</Link> </li>
								<li><Link to="#">Schedule</Link></li>
                <li><Link to="#">MediLink</Link></li>
                <li><Link to="#">Contact</Link></li>
              </ul>
            </nav>
          </div>
          <div className={styles.center}>
					  <Link to="#"><img className={styles.logo} src={logo} alt="logo"/></Link>
          </div>
          <div className={styles.right}>
					  <Link to="#"><img className={styles.live} src={live} alt="live"/></Link>
          </div>
				</header>
 )
}

export default Navbar
