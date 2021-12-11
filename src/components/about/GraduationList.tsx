import { FaGraduationCap } from 'react-icons/fa'

import { Heading } from '../Heading'
import styles from './../../styles/components/about/graduation-list.styles.module.scss'

export function GraduationList() {
  return (
    <div className={styles.graduationContainer}>
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
  )
}
