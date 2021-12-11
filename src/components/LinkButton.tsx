import Link from 'next/link'
import { FaUser } from 'react-icons/fa'

import styles from '../styles/components/linkbutton.styles.module.scss'

export function LinkButton() {
  return (
    <>
      <Link href="/about">
        <a className={styles.linkButton}>
          <div>
            Sobre mim
            <FaUser />
          </div>
        </a>
      </Link>
    </>
  )
}
