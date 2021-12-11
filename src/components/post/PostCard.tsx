import { FaLink } from 'react-icons/fa'

import styles from '../../styles/components/post/post-card.styles.module.scss'
import { LinkButton } from '../LinkButton'
import { PostCardContent } from './PostCard/PostCardContent'

export function PostCard() {
  return (
    <section className={styles.box}>
      <div className={styles.image}>
        <img src="/images/blog1.jpg" alt="blog" />
      </div>
      <PostCardContent />
      <LinkButton link="/post/batata" icon={FaLink} description="leia mais" />
    </section>
  )
}
