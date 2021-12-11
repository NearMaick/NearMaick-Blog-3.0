import { FaGraduationCap } from 'react-icons/fa'

import { InfoCard } from '../components/about/InfoCard'
import { ProjectCount } from '../components/about/ProjectCount'
import { SkillsList } from '../components/about/SkillsList'
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
        <SkillsList />
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
