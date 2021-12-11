import { FaGraduationCap } from 'react-icons/fa'

import { InfoCard } from '../components/about/InfoCard'
import { ProjectCount } from '../components/about/ProjectCount'
import { Heading } from '../components/Heading'
import styles from '../styles/pages/About.module.scss'

export default function About() {
  return (
    <>
      <section>
        <Heading title="sobre" subtitle="mim" />
        <div className={styles.row}>
          <InfoCard />
          <ProjectCount />
        </div>
      </section>
      <section>
        <Heading title="minhas habilidades" subtitle="técnicas" />

        <div className={styles.skillsContainer}>
          <div>
            <img src="images/icon-1.png" alt="image" />
            <h3>html</h3>
          </div>
          <div>
            <img src="images/icon-2.png" alt="image" />
            <h3>css</h3>
          </div>
          <div>
            <img src="/images/icon-3.png" alt="image" />
            <h3>javascript</h3>
          </div>
          <div>
            <img src="/images/icon-4.png" alt="image" />
            <h3>sass</h3>
          </div>
          <div>
            <img src="/images/icon-5.png" alt="image" />
            <h3>jquery</h3>
          </div>
          <div>
            <img src="/images/icon-6.png" alt="image" />
            <h3>react.js</h3>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.educationContainer}>
          <Heading title="minhas" subtitle="qualificações" />
          <div>
            <i>
              <FaGraduationCap />
            </i>
            <span>2011 - 2015</span>
            <h3>Graduado em sistemas de informação</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              explicabo magni est quo vitae quis veritatis fugiat optio placeat
              enim!
            </p>
          </div>
          <div>
            <i>
              <FaGraduationCap />
            </i>
            <span>2011 - 2015</span>
            <h3>Graduado em sistemas de informação</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              explicabo magni est quo vitae quis veritatis fugiat optio placeat
              enim!
            </p>
          </div>
          <div>
            <i>
              <FaGraduationCap />
            </i>
            <span>2011 - 2015</span>
            <h3>Graduado em sistemas de informação</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              explicabo magni est quo vitae quis veritatis fugiat optio placeat
              enim!
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
