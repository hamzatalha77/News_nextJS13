import Link from 'next/link'
import React from 'react'
import styles from './page.module.css'
const Portfolio = () => {
  return (
    <div className="">
      <h1 className="selectTitle">Choose a Gallery</h1>
      <div className="flex gap-14">
        <Link className={styles.item} href="/portfolio/illustrations">
          <span className="absolute right-3 bottom-3 text-4xl font-bold">
            Illustrations
          </span>
        </Link>
        <Link className={styles.item} href="/portfolio/websites">
          <span className="absolute right-3 bottom-3 text-4xl font-bold">
            Websites
          </span>
        </Link>
        <Link className={styles.item} href="/portfolio/applications">
          <span className="absolute right-3 bottom-3 text-4xl font-bold">
            Applications
          </span>
        </Link>
      </div>
    </div>
  )
}

export default Portfolio
