import Link from 'next/link'

import styles from './styles.module.scss'

export function Navbar() {
  return (
    <nav className={styles.navContainer}>
      <Link href="/">
        <a>Navbar</a>
      </Link>
    </nav>
  )
}
