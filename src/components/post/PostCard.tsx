import { FaCalendar, FaLink, FaUser } from 'react-icons/fa'

import styles from '../../styles/components/post/post-card.styles.module.scss'
import { LinkButton } from '../LinkButton'

export function PostCard() {
  return (
    <section className={styles.box}>
      <div className={styles.image}>
        <img src="/images/blog1.jpg" alt="blog" />
      </div>
      <div className={styles.content}>
        <div>
          <div>
            <FaCalendar /> 21 de dez de 2021
            <FaUser /> Maick Souza
          </div>
        </div>
        <h3>Título do blog</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          illum.
        </p>
      </div>
      <LinkButton link="/post/batata" icon={FaLink} description="leia mais" />
    </section>
  )
}
