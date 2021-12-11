import { GraduationList } from '../components/about/GraduationList'
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
        <GraduationList />
      </section>
    </>
  )
}
