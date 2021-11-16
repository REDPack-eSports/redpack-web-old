import React from "react"
import * as styles from "../components/styledComp/Teams.module.scss"
import { Link } from "gatsby"

import playerph from "../images/player_ph.png"
import phwhite from "../images/player_ph_white.png"

const Teams = () => {
  return (
    <div>
      <section className={styles.teams}>
        <div className={styles.heading}>
          <Link to="/">
            <h1 className={styles.sectionheader}>Teams</h1>
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
        <div className={styles.clearfix}></div>

        <div className={styles.content}>
          <div className={`${styles.item} ${styles.cs}`}>
            <div className={styles.inner}>
              <Link to="https://www.faceit.com/en/teams/135219c1-598c-46b9-b683-7ac25da35cc2">
                <h2>REDPack Esports</h2>
              </Link>
              <div className={styles.team}>
                <div className={styles.top}>
                  <div className={styles.player}>
                    <img src={playerph} />
                    <p>FREELOOK-</p>
                  </div>
                  <div className={styles.player}>
                    <img src={playerph} />
                    <p>Marsal</p>
                  </div>
                  <div className={styles.player}>
                    <img src={playerph} />
                    <p>RoberttMP</p>
                  </div>
                </div>
                <div className={styles.bottom}>
                  <div className={styles.player}>
                    <img src={playerph} />
                    <p>never-sleep</p>
                  </div>
                  <div className={styles.player}>
                    <img src={playerph} />
                    <p>-mhA-</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.item} ${styles.valorant}`}>
            <div className={styles.inner}>
              <Link to="https://www.faceit.com/en/teams/1809acf7-82ea-4631-a2d5-52b305589762">
                <h2>REDPack Hunters</h2>
              </Link>
              <div className={styles.team}>
                <div className={styles.top}>
                  <div className={styles.player}>
                    <img src={phwhite} />
                    <p>erretzen</p>
                  </div>
                  <div className={styles.player}>
                    <img src={phwhite} />
                    <p>awks</p>
                  </div>
                  <div className={styles.player}>
                    <img src={phwhite} />
                    <p>adere</p>
                  </div>
                </div>
                <div className={styles.bottom}>
                  <div className={styles.player}>
                    <img src={phwhite} />
                    <p>-reptroller</p>
                  </div>
                  <div className={styles.player}>
                    <img src={phwhite} />
                    <p>JookerBB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.item} ${styles.valorant}`}>
            <div className={styles.inner}>
              <Link to="https://www.faceit.com/en/teams/9fa404e0-2602-4a3c-a67d-6187e24c11d5">
                <h2>REDPack Wild</h2>
              </Link>
              <div className={styles.team}>
                <div className={styles.top}>
                  <div className={styles.player}>
                    <img src={phwhite} />
                    <p>bobon1</p>
                  </div>
                  <div className={styles.player}>
                    <img src={phwhite} />
                    <p>phrika</p>
                  </div>
                  <div className={styles.player}>
                    <img src={phwhite} />
                    <p>Winnie47</p>
                  </div>
                </div>
                <div className={styles.bottom}>
                  <div className={styles.player}>
                    <img src={phwhite} />
                    <p>Animaluuu</p>
                  </div>
                  <div className={styles.player}>
                    <img src={phwhite} />
                    <p>spargmasele</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.item} ${styles.cs}`}>
            <div className={styles.inner}>
              <h2>Valorant</h2>
              <div className={styles.team}>
                <div className={styles.top}>
                  <div className={styles.player}>
                    <img src={playerph} />
                    <p>TBA</p>
                  </div>
                  <div className={styles.player}>
                    <img src={playerph} />
                    <p>TBA</p>
                  </div>
                  <div className={styles.player}>
                    <img src={playerph} />
                    <p>TBA</p>
                  </div>
                </div>
                <div className={styles.bottom}>
                  <div className={styles.player}>
                    <img src={playerph} />
                    <p>TBA</p>
                  </div>
                  <div className={styles.player}>
                    <img src={playerph} />
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
