import Image from 'next/image'
import Link from 'next/link'
import { FaDownload, FaGraduationCap } from 'react-icons/fa'

import styles from '../styles/About.module.scss'
export default function About() {
  return (
    <>
      <section className={styles.about}>
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
            <Link href="/">
              <a className={styles.linkButton}>
                <div>
                  Baixar CV
                  <FaDownload />
                </div>
              </a>
            </Link>
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
      <section className="skills">
        <h1 className="heading">
          Minhas habilidades <span>técnicas</span>
        </h1>

        <div className="boxContainer">
          <div>
            <Image
              src="/images/icon-1.png"
              height="32"
              width="32"
              alt="image"
            />
            <h3>html</h3>
          </div>
          <div>
            <Image
              src="/images/icon-2.png"
              height="32"
              width="32"
              alt="image"
            />
            <h3>css</h3>
          </div>
          <div>
            <Image
              src="/images/icon-3.png"
              height="32"
              width="32"
              alt="image"
            />
            <h3>javascript</h3>
          </div>
          <div>
            <Image
              src="/images/icon-4.png"
              height="32"
              width="32"
              alt="image"
            />
            <h3>sass</h3>
          </div>
          <div>
            <Image
              src="/images/icon-5.png"
              height="32"
              width="32"
              alt="image"
            />
            <h3>jquery</h3>
          </div>
          <div>
            <Image
              src="/images/icon-6.png"
              height="32"
              width="32"
              alt="image"
            />
            <h3>react.js</h3>
          </div>
        </div>
      </section>
      <section className="eduaction">
        <div className="boxContainer">
          <div>
            <i>
              <FaGraduationCap />
            </i>
            <span>2011 - 2015</span>
            <h3>Graduado em sistemas de informação</h3>
          </div>
          <div>
            <i>
              <FaGraduationCap />
            </i>
            <span>2011 - 2015</span>
            <h3>Graduado em sistemas de informação</h3>
          </div>
          <div>
            <i>
              <FaGraduationCap />
            </i>
            <span>2011 - 2015</span>
            <h3>Graduado em sistemas de informação</h3>
          </div>
          <div>
            <i>
              <FaGraduationCap />
            </i>
            <span>2011 - 2015</span>
            <h3>Graduado em sistemas de informação</h3>
          </div>
          <div>
            <i>
              <FaGraduationCap />
            </i>
            <span>2011 - 2015</span>
            <h3>Graduado em sistemas de informação</h3>
          </div>
        </div>
      </section>
    </>
  )
}
