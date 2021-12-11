import Link from 'next/link'
import { ComponentType } from 'react'
import { IconBaseProps } from 'react-icons'

import styles from '../styles/components/linkbutton.styles.module.scss'

type LinkButtonProps = {
  link: string
  icon: ComponentType<IconBaseProps>
}

export function LinkButton({ link, icon: Icon }: LinkButtonProps) {
  return (
    <>
      <Link href={link}>
        <a className={styles.linkButton}>
          <div>
            Sobre mim
            <Icon />
          </div>
        </a>
      </Link>
    </>
  )
}
