import Image from 'next/image'
import { FC } from 'react'
import { BsSearch } from 'react-icons/bs'
import { RxHamburgerMenu } from 'react-icons/rx'

import logo from './images/vortices_logo_blanco_transp_01.svg'
import styles from './style.module.scss'

export const Header: FC = () => (
  <header className={styles.header}>
    <div className={styles.logo_container}>
      <Image src={logo} alt='vortices logo' fill />
    </div>
    <div className={styles.header__nav}>
      <BsSearch className={styles.icon} />
      <RxHamburgerMenu className={styles.icon} />
    </div>
  </header>
)
