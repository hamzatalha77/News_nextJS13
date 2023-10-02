import Link from 'next/link'
import React from 'react'
import styles from './page.module.css'
const Portfolio = () => {
  return (
    <div>
      <h1 className={styles.selectTitle}>Choose a Gallery</h1>
      <div className="flex gap-14">
        <Link href="/portfolio/illustrations" className={styles.item}>
          <span className={styles.title}>Illustrations</span>
        </Link>
        <Link href="/portfolio/websites" className={styles.item}>
          <span className={styles.title}>Websites</span>
        </Link>
        <Link href="/portfolio/applications" className={styles.item}>
          <span className={styles.title}>Applications</span>
        </Link>
      </div>
    </div>
  )
}

export default Portfolio
