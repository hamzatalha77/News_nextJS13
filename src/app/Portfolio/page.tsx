import Link from 'next/link'
import React from 'react'
import styles from './page.module.css'
const Portfolio = () => {
  return (
    <div className="">
      <h1 className={styles.selectTitle}>Choose a Gallery</h1>
      <div className="flex gap-14">
        <Link className={styles.item} href="/portfolio/illustrations">
          <span className={styles.title}>Illustrations</span>
        </Link>
        <Link className={styles.item} href="/portfolio/websites">
          <span className={styles.title}>Websites</span>
        </Link>
        <Link className={styles.item} href="/portfolio/applications">
          <span className={styles.title}>Applications</span>
        </Link>
      </div>
    </div>
  )
}

export default Portfolio
