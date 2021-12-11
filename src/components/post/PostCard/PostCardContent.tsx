import { FaCalendar, FaUser } from 'react-icons/fa'

import styles from '../../../styles/components/post/postCard/post-card-content.styles.module.scss'

export function PostCardContent() {
  return (
    <div className={styles.content}>
      <div>
        <div>
          <FaCalendar /> 21 de dez de 2021
          <FaUser /> Maick Souza
        </div>
      </div>
      <h3>Título do blog</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, illum.
      </p>
    </div>
  )
}
