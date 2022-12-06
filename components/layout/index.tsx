import { FC, ReactNode } from 'react'
import { Footer } from '../footer'
import { Header } from '../header'
import styles from './style.module.scss'

export const Layout: FC<{ children: ReactNode }> = ({ children }) => (
  <div className={styles.wrapper}>
    <Header />
    <main className={styles.main}>{children}</main>
    <Footer />
  </div>
)
