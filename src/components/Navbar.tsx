import Link from 'next/link'
import { FaBlog, FaHome, FaUser } from 'react-icons/fa'

import styles from '../styles/components/navbar.styles.module.scss'

export function Navbar() {
  return (
    <nav className={styles.navbarContainer}>
      <Link href="/">
        <a>
          <i>
            <FaHome />
          </i>
          <span>Home</span>
        </a>
      </Link>
      <Link href="/about">
        <a>
          <i>
            <FaUser />
          </i>
          <span>Sobre</span>
        </a>
      </Link>

      <Link href="/blog">
        <a>
          <i>
            <FaBlog />
          </i>
          <span>Blog</span>
        </a>
      </Link>
    </nav>
  )
}
