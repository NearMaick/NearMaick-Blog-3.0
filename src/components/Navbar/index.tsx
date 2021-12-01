import Link from 'next/link'
import {
  FaAddressBook,
  FaBlog,
  FaBriefcase,
  FaHome,
  FaUser,
} from 'react-icons/fa'

import styles from './styles.module.scss'

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
      <Link href="/">
        <a>
          <i>
            <FaUser />
          </i>
          <span>Sobre</span>
        </a>
      </Link>
      <Link href="/">
        <a>
          <i>
            <FaBriefcase />
          </i>
          <span>Portfólio</span>
        </a>
      </Link>
      <Link href="/">
        <a>
          <i>
            <FaBlog />
          </i>
          <span>Blog</span>
        </a>
      </Link>
      <Link href="/">
        <a>
          <i>
            <FaAddressBook />
          </i>
          <span>Contato</span>
        </a>
      </Link>
    </nav>
  )
}
