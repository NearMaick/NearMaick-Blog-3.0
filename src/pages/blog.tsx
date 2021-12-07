import { FaCalendar, FaLink, FaUser } from 'react-icons/fa'

import styles from '../styles/Blog.module.scss'

export default function Blog() {
  return (
    <>
      <div>
        <h1 className={styles.heading}>
          nearmaick <span>blog</span>
        </h1>
      </div>

      <div className={styles.blogContainer}>
        <div className={styles.box}>
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
          <a className={styles.linkButton} href="#">
            <div>
              <FaLink />
              Leia Mais...
            </div>
          </a>
        </div>
        <div className={styles.box}>
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
          <a className={styles.linkButton} href="#">
            <div>
              <FaLink />
              Leia Mais...
            </div>
          </a>
        </div>
        <div className={styles.box}>
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
          <a className={styles.linkButton} href="#">
            <div>
              <FaLink />
              Leia Mais...
            </div>
          </a>
        </div>
        <div className={styles.box}>
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
          <a className={styles.linkButton} href="#">
            <div>
              <FaLink />
              Leia Mais...
            </div>
          </a>
        </div>
      </div>
    </>
  )
}
