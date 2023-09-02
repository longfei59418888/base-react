import { FC, PropsWithChildren } from 'react'
import * as React from 'react'

import styles from './index.module.scss'

const Index: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.container}>
      <header></header>
      <div className={styles.main}>
        <div className={styles.mainLeft}></div>
        <div className={styles.mainRight}>
          <div className={styles.nav}></div>
          <div className={styles.page}>{children}</div>
        </div>
      </div>
    </div>
  )
}

export default Index
