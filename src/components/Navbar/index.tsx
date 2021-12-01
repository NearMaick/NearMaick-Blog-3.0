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
          <FaHome />
          Home
        </a>
      </Link>
      <Link href="/">
        <a>
          <FaUser />
          Sobre
        </a>
      </Link>
      <Link href="/">
        <a>
          <FaBriefcase />
          Portfólio
        </a>
      </Link>
      <Link href="/">
        <a>
          <FaBlog />
          Blog
        </a>
      </Link>
      <Link href="/">
        <a>
          <FaAddressBook />
          Contato
        </a>
      </Link>
    </nav>
  )
}
