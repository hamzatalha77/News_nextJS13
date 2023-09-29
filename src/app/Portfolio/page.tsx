import Link from 'next/link'
import React from 'react'

const Portfolio = () => {
  return (
    <div>
      <h1>Choose a Gallery</h1>
      <div>
        <Link href="/portfolio/illustrations">
          <span>Illustrations</span>
        </Link>
        <Link href="/portfolio/websites">
          <span>Websites</span>
        </Link>
        <Link href="/portfolio/applications">
          <span>Applications</span>
        </Link>
      </div>
    </div>
  )
}

export default Portfolio
