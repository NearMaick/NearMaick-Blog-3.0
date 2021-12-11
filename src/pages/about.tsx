import { FaDownload, FaGraduationCap } from 'react-icons/fa'

import { LinkButton } from '../components/LinkButton'
import styles from '../styles/pages/About.module.scss'

export default function About() {
  return (
    <>
      <section>
        <h1 className={styles.heading}>
          sobre <span>mim</span>
        </h1>
        <div className={styles.row}>
          <div className={styles.infoContainer}>
            <h1>informações pessoais</h1>
            <div className={styles.boxContainer}>
              <div>
                <h3>
                  <span>nome : </span>Maick Souza
                </h3>
                <h3>
                  <span>email : </span>maick_a_s@msn.com
                </h3>
                <h3>
                  <span>nome : </span>Maick Souza
                </h3>
              </div>
              <div>
                <h3>
                  <span>habilidades : </span>full-stack
                </h3>
                <h3>
                  <span>email : </span>maick_a_s@msn.com
                </h3>
                <h3>
                  <span>nome : </span>Maick Souza
                </h3>
              </div>
            </div>
            <LinkButton link="/" description="Baixar CV" icon={FaDownload} />
          </div>
          <div className={styles.countContainer}>
            <div>
              <h3>1+</h3>
              <p>desenvolvendo projetos</p>
            </div>
            <div>
              <h3>1+</h3>
              <p>desenvolvendo projetos</p>
            </div>
            <div>
              <h3>1+</h3>
              <p>desenvolvendo projetos</p>
            </div>
            <div>
              <h3>1+</h3>
              <p>desenvolvendo projetos</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h1 className={styles.heading}>
          Minhas habilidades <span>técnicas</span>
        </h1>

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
          <h1 className={styles.heading}>
            minhas <span>qualificações</span>
          </h1>
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
