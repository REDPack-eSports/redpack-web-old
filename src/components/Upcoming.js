import React from "react"
import * as styles from "../components/styledComp/Upcoming.module.scss"
import { Link } from "gatsby"

import upcone from "../images/Upcoming1.png"
import upctwo from "../images/Upcoming2.png"
import upcthree from "../images/Upcoming3.png"
import newsone from "../images/News1.png"
import phone from "../images/ph1.jpg"

const Upcoming = () => {
  return (
    <div>
      <section className={styles.upcoming}>
        <div className={styles.heading}>
          <Link to="#">
            <h1 className={styles.sectionheader}>Upcoming </h1>
            <svg
              width="16"
              height="16"
              fill="currentColor"
              className={styles.headingArrow}
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
              />
            </svg>
          </Link>
        </div>

        <div className={`${styles.content} ${styles.mobile}`}>
          <div className={`${styles.item} ${styles.one}`}>
            <img className={styles.image} src={upcone} alt="upcoming_1" />
            <h2 className={styles.title}>Bi-weekly Youtube Shows</h2>
          </div>
          <div className={`${styles.item} ${styles.two}`}>
            <img className={styles.image} src={upctwo} alt="upcoming_2" />
            <h2 className={styles.title}>Tournament highlights</h2>
          </div>
          <div className={`${styles.item} ${styles.three}`}>
            <h2 className={styles.title}>CS:GO Team joins </h2>
            <img className={styles.image} src={upcthree} alt="upcoming_3" />
          </div>
        </div>

        <div className={`${styles.content} ${styles.desktop}`}>
          <div className={`${styles.item} ${styles.one}`}>
            <img className={styles.image} src={phone} alt="upcoming_1" />
            <h2 className={styles.title}>Bi-weekly Youtube Shows</h2>
          </div>
          <div className={styles.right}>
            <div className={`${styles.item} ${styles.two}`}>
              <img className={styles.image} src={newsone} alt="upcoming_2" />
              <h2 className={styles.title}>Tournament highlights</h2>
            </div>
            <div className={`${styles.item} ${styles.three}`}>
              <h2 className={styles.title}>CS:GO Team joins </h2>
              <img className={styles.image} src={upcthree} alt="upcoming_3" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Upcoming
